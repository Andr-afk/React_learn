const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'
const NEW_MESSAGE = 'NEW-MESSAGE'

const dialogsReducer = (state, action)=>{
    switch (action.type) {
        case UPDATE_TEXT_DIALOG:
            state.newDialogText = action.text // state.dialogsPage
            return state

        case NEW_MESSAGE:
            let mess = {
                id: 6,
                message: state.newDialogText
            }
            state.messages.push(mess)

            return state
        default:
            return state
    }
}


export const updateTextDialogActionCreator = (text) => ({type: UPDATE_TEXT_DIALOG, text: text}) // rewrite path in MyPosts components
export const newMessageActionCreator = () => ({type: NEW_MESSAGE})

export default dialogsReducer