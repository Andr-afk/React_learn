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

const dialogsReducer = (state = initialSize, action) => {
    switch (action.type) {
        case UPDATE_TEXT_DIALOG:
            return {
                ...state,
                newDialogText: action.text
            }
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newDialogText}],
                newDialogText: ''
            }
        default:
            return state
    }
}

//actions creators
export const updateTextDialog = (text) => ({type: UPDATE_TEXT_DIALOG, text: text})
export const addMessage = () => ({type: NEW_MESSAGE})

export default dialogsReducer