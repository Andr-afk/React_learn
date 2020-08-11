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
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.text}],
                newDialogText: ''
            }
        default:
            return state
    }
}

//actions creators
export const addMessage = (text) => ({type: NEW_MESSAGE, text})

export default dialogsReducer