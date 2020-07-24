import Dialogs from "./Dialogs";
import {updateTextDialog, addMessage} from "../../redux/dialogsPage-reducer";
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({DialogsPage: state.DialogsPage})

/*let mapDispatchToProps = (dispatch) => {
    return {
        updateTextDialog: (text) => {
            dispatch(updateTextDialog(text))
        },
        addMessage: () => {
            dispatch(newMessage())
            //state.DialogsPage.newDialogText = ''
        }
    }
}*/

let mapDispatchToProps = ({
    updateTextDialog,
    addMessage
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
