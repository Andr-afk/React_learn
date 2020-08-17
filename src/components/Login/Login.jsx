import React from "react";
import {reduxForm} from "redux-form";
import {loginMeThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {CreateField, Input} from "../common/FormController/FormController";
import {isEmail, required} from "../../utilits/validators";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("login", Input, "text", [required, isEmail], "login")}
            {CreateField("password", Input, "password", required, "password")}
            {CreateField("rememberMe", Input, "checkbox", null, null, null, "remember me")}
            <div>
                <button>Login</button>
            </div>

            {error && <div>{error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({loginMe}) => {

    const onSubmit = (formData) => {
        loginMe(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = {
    loginMe: loginMeThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)