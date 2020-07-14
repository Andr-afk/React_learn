const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

let initialState = {
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
        newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    let state_copy;
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                message: state.newPostText,
                count_like: 0
            }
            state_copy = {...state}
            state_copy.posts = [...state_copy.posts]
            state_copy.posts.push(post)
            state_copy.newPostText = ""
            return state_copy
        case UPDATE_TEXT_POST:
            state_copy = {...state}
            state_copy.newPostText = action.text
            return state_copy
        default:
            return state
    }


}


export const addPostActionCreator = () => ({type: ADD_POST}) //скобочки ставим из-за того, что компилятор фигурные скобки воспринимает как тело функции, в нашем случае это объект
export const updateTextPostActionCreator = (text) => ({type: UPDATE_TEXT_POST, text: text})

export default profileReducer