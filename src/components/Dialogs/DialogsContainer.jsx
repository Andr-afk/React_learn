import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsPage-reducer";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    DialogsPage: state.DialogsPage,
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = ({
    addMessage
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
