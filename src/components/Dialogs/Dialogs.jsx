import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utilits/validators"
import {Textarea} from "../common/FormController/FormController";



const Dialogs = (props) => {

    if (!props.isAuth) return <Redirect to="/login"/>

    let dialog_elements = props.DialogsPage.dialogs.map(dialog => (<Dialog name={dialog.name} key={dialog.id}/>))
    let message_elements = props.DialogsPage.messages.map(mess => <Message text={mess.message} key={mess.id}/>)




    let onSubmit = (formData)=>{
        debugger
        props.addMessage(formData.DialogText)
        props.clearForm("Send_Message")
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialog_elements}
            </div>
            <div className={classes.messages}>
                {message_elements}
                <DialogsFormRedux onSubmit={onSubmit}/>

            </div>
        </div>
    )
}


const maxLength10 = maxLength(10)

const DialogsForm = (props)=>{
    const {handleSubmit} = props

    return(
        <form onSubmit={handleSubmit}>
            <Field name="DialogText" component={Textarea} validate={[maxLength10, required]} placeholder="Write a message"/>
            <button>Send Message</button>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "Send_Message"})(DialogsForm)

export default React.memo(Dialogs)

