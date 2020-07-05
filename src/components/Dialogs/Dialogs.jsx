import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {

    let dialog_elements = props.state.dialogs.map(dialog => (<Dialog name={dialog.name} id={dialog.id}/>))
    let message_elements = props.state.messages.map(mess => <Message text={mess.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        alert(newMessageElement.current.value)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send message</button>

            </div>
        </div>
    )
}


export default Dialogs








