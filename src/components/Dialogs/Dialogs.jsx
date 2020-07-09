import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {updateTextDialogActionCreator, newMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialog_elements = props.DialogsPage.dialogs.map(dialog => (<Dialog name={dialog.name} id={dialog.id}/>))

    let message_elements = props.DialogsPage.messages.map(mess => <Message text={mess.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(newMessageActionCreator())
        props.DialogsPage.newDialogText = ''
    }


    let updateTextDialog = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateTextDialogActionCreator(text))
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
                          value={props.DialogsPage.newDialogText}
                          ref={newMessageElement}/>
                <button onClick={addMessage}>Send message</button>

            </div>
        </div>
    )
}


export default Dialogs
