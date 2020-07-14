const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'
const NEW_MESSAGE = 'NEW-MESSAGE'

let initialSize = {
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

}

const dialogsReducer = (state = initialSize, action)=>{
    let state_copy;
    switch (action.type) {
        case UPDATE_TEXT_DIALOG:
            state_copy = {...state}
            state_copy.newDialogText = action.text // state.dialogsPage
            return state_copy
        case NEW_MESSAGE:
            let mess = {
                id: 6,
                message: state.newDialogText
            }
            state_copy = {...state}
            state_copy.messages = [...state.messages]
            //state.messages.push(mess) было
            state_copy.messages.push(mess)
            state_copy.newDialogText = ''
            return state_copy
        default:
            return state
    }
}


export const updateTextDialogActionCreator = (text) => ({type: UPDATE_TEXT_DIALOG, text: text}) // rewrite path in MyPosts components
export const newMessageActionCreator = () => ({type: NEW_MESSAGE})

export default dialogsReducer