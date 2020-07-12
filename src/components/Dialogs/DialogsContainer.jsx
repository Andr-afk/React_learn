import React from 'react'
import Dialogs from "./Dialogs";
import {updateTextDialogActionCreator, newMessageActionCreator} from "../../redux/dialogsPage-reducer";


const DialogsContainer = (props) => {

    let OnAddMessage = () => {
        props.store.dispatch(newMessageActionCreator())
        props.store.getState().DialogsPage.newDialogText = ''
    }

    let OnUpdateTextDialog = (text) => {
        props.store.dispatch(updateTextDialogActionCreator(text))
    }


    return <Dialogs
        addMessage={OnAddMessage}
        updateTextDialog={OnUpdateTextDialog}
        DialogsPage={props.store.getState().DialogsPage}
    />
}


export default DialogsContainer
