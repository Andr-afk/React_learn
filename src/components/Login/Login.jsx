import React from "react";
import {getCaptchaURLThunkCreator, loginMeThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";


const Login = ({loginMe, captchaURL, getCaptchaURL, isAuth}) => {

    const onSubmit = async (formData) => {
        loginMe(formData)
    }

    if (isAuth) return <Redirect to="/profile"/>
    else {
        return (
            <div>
                <h2>Login</h2>
                <LoginForm onSubmit={onSubmit}
                           captchaURL={captchaURL}
                           getCaptchaURL={getCaptchaURL}/>
            </div>
        )
    }

}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

let mapDispatchToProps = {
    loginMe: loginMeThunkCreator,
    getCaptchaURL: getCaptchaURLThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)