//action type

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'
const NEW_MESSAGE = 'NEW-MESSAGE'


let store = {
    _state: {
        ProfilePage: {
            posts: [
                {
                    id: 0,
                    image: "https://wallbox.ru/resize/2560x1600/wallpapers/main/201546/13dcd7162ea7a31.jpg",
                    message: "I sad you go to fuck yourself",
                    count_like: 30
                },
                {
                    id: 1,
                    image: "https://avatars.mds.yandex.net/get-pdb/1875351/75fa2b62-7fd3-4985-9283-2e719f4fbf48/s1200?webp=false",
                    message: "Hello, how are you",
                    count_like: 20
                },
                {
                    id: 2,
                    image: "https://img2.goodfon.ru/original/3200x1200/b/46/koshka-vzglyad-glaza-eda.jpg",
                    message: "White and black lives matter, sometimes!",
                    count_like: 10
                },
                {
                    id: 3,
                    image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                    message: "Hey! Whatsup?",
                    count_like: 30
                },
            ],
            newPostText: "Hey, write me here! Right now!!!"
        },
        DialogsPage: {
            dialogs: [
                {id: 0, name: "Dimych"},
                {id: 1, name: "Aleksandr"},
                {id: 2, name: "Valera"},
                {id: 3, name: "Anna"},
                {id: 4, name: "Vika"},
                {id: 5, name: "Andrey"},
            ],
            messages: [
                {id: 0, message: "If you see it, data was moved successfully"},
                {id: 1, message: "He"},
                {id: 2, message: "Hg"},
                {id: 3, message: "Hh"},
                {id: 4, message: "Hf"},
                {id: 5, message: "Him"},
            ],
            newDialogText: ''
        },
        NavPage: {
            friends: [
                {
                    id: 0,
                    name: "Andrey",
                    image: "https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                },
                {
                    id: 1,
                    name: "Natalia",
                    image: "https://sun9-32.userapi.com/impf/c824201/v824201969/173424/ayWCFmi538s.jpg?size=200x0&quality=90&sign=b461a01af900c4374512c2b13455c25d&ava=1"
                },
                {
                    id: 2,
                    name: "Valera",
                    image: "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"
                }

            ]
        }
    },
    _renderTree() {
        console.log('this method is empty, use subscriber')
    },

    set subscribe(observer) {
        this._renderTree = observer
    },
    get get_state() {
        return this._state
    },

    dispatch(action) {

        switch (action.type) {
            case ADD_POST:
                let post = {
                    id: 4,
                    image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                    message: this._state.ProfilePage.newPostText,
                    count_like: 0
                }
                this._state.ProfilePage.posts.push(post)
                this._state.ProfilePage.newPostText = ""
                this._renderTree(this.get_state)
                break
            case UPDATE_TEXT_POST:
                this._state.ProfilePage.newPostText = action.text
                this._renderTree(this.get_state)
                break
            case UPDATE_TEXT_DIALOG:
                this._state.DialogsPage.newDialogText = action.text
                this._renderTree(this.get_state)
                break
            case NEW_MESSAGE:
                let mess = {
                    id: 6,
                    message: store._state.DialogsPage.newDialogText
                }
                store._state.DialogsPage.messages.push(mess)
                this._renderTree(this._state)
                break
            default:
                console.log('this type is not exist in dispatch')
                break
        }
    }
}

export default store


// action creators

// export const addPostActionCreator = () => {
//     return {type: ADD_POST}
// }

export const addPostActionCreator = () => ({type: ADD_POST}) //скобочки ставим из-за того, что компилятор фигурные скобки воспринимает как тело функции, в нашем случае это объект
export const updateTextPostActionCreator = (text) => ({type: UPDATE_TEXT_POST, text: text})
export const updateTextDialogActionCreator = (text) => ({type: UPDATE_TEXT_DIALOG, text: text})
export const newMessageActionCreator = () => ({type: NEW_MESSAGE})
