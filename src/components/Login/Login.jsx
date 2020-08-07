import React from "react";
import {reduxForm, Field} from "redux-form";
import {loginMeThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const LoginForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' placeholder='login' component="input" type="text"/></div>
            <div><Field name='password' placeholder='password' component="input" type="text"/></div>
            <div><Field name='rememberMe' component="input" type="checkbox"/>remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData)=>{
        props.loginMe(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


let mapStateToProps = (state)=>{}

let mapDispatchToProps  = {
    loginMe: loginMeThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)