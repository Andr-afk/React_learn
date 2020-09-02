import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsPage-reducer";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";
import {clearForm} from "../common/FormController/helperForForms";



let mapStateToProps = (state) => ({
    DialogsPage: state.DialogsPage,
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = (dispatch) => ({
    addMessage:(text)=>{dispatch(addMessage(text))},
    // clearForm: (formName, reset)=>{
    //     dispatch(reset(formName))
    // }
    clearForm: (formName)=>{dispatch(clearForm(formName))}
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
