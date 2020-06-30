import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    let dialog_elements = props.dataDialogs.map(dialog => (<Dialog name={dialog.name} id={dialog.id}/>))
    let message_elements = props.dataMessages.map(mess => <Message text={mess.message}/>)

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








