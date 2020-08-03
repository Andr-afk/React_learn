import Dialogs from "./Dialogs";
import {updateTextDialog, addMessage} from "../../redux/dialogsPage-reducer";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    DialogsPage: state.DialogsPage,
    isAuth: state.auth.isAuth
})

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
