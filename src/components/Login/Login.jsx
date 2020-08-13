import React from "react";
import {reduxForm, Field} from "redux-form";
import {loginMeThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Input} from "../common/FormController/FormController";
import {isEmail, required} from "../../utilits/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' placeholder='login' component={Input} type="text" validate={[required, isEmail]}/>
            </div>
            <div>
                <Field name='password' placeholder='password' component={Input} type="password" validate={required}/>
            </div>
            <div>
                <Field name='rememberMe' component={Input} type="checkbox"/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>

                {
                    props.error && <div>props.error</div>
                }

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginMe(formData)
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