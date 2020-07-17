import React from 'react'
import Dialogs from "./Dialogs";
import {updateTextDialogActionCreator, newMessageActionCreator} from "../../redux/dialogsPage-reducer";
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({DialogsPage: state.DialogsPage})

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextDialog: (text) => {
            dispatch(updateTextDialogActionCreator(text))
        },
        addMessage: () => {
            dispatch(newMessageActionCreator())
            //state.DialogsPage.newDialogText = ''
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
