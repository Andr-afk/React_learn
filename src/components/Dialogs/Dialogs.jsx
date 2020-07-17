import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    let dialog_elements = props.DialogsPage.dialogs.map(dialog => (<Dialog name={dialog.name} key={dialog.id}/>))

    let message_elements = props.DialogsPage.messages.map(mess => <Message text={mess.message} key={mess.id}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let updateTextDialog = (e) => {
        debugger;
        props.updateTextDialog(e.target.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<Dialog name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {dialog_elements}
            </div>
            <div className={classes.messages}>
                {/*<Message text={messages[0].message_elements}/>*/}
                {message_elements}
                <textarea onChange={updateTextDialog}
                          value={props.DialogsPage.newDialogText}/>
                <button onClick={addMessage}>Send message</button>

            </div>
        </div>
    )
}


export default Dialogs
