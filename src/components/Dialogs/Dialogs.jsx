import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";



const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<Dialog name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {dialog_elements}
            </div>
            <div className={classes.messages}>
                {/*<Message text={messages[0].message_elements}/>*/}
                {message_elements}
            </div>
        </div>
    )
}


export default Dialogs

let dialogs = [
    {id: 0, name: "Dimych"},
    {id: 1, name: "Aleksandr"},
    {id: 2, name: "Valera"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Vika"},
    {id: 5, name: "Andrey"},
]

let messages = [
    {id: 0, message: "Hi"},
    {id: 1, message: "He"},
    {id: 2, message: "Hg"},
    {id: 3, message: "Hh"},
    {id: 4, message: "Hf"},
    {id: 5, message: "Him"},
]

let message_elements = messages.map(mess => <Message text={mess.message}/>)
let dialog_elements = dialogs.map(dialog => (<Dialog name={dialog.name} id={dialog.id}/>))


