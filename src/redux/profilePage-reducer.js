const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                message: state.newPostText,
                count_like: 0
            }
            state.posts.push(post)
            state.newPostText = ""
            return state
        case UPDATE_TEXT_POST:
            state.newPostText = action.text
            return state
        default:
            return state
    }


}


export const addPostActionCreator = () => ({type: ADD_POST}) //скобочки ставим из-за того, что компилятор фигурные скобки воспринимает как тело функции, в нашем случае это объект
export const updateTextPostActionCreator = (text) => ({type: UPDATE_TEXT_POST, text: text})

export default profileReducer
