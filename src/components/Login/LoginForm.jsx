import {CreateField, Input} from "../common/FormController/FormController";
import {isEmail, required} from "../../utilits/validators";
import {reduxForm} from "redux-form";
import React from "react";

const LoginForm = ({handleSubmit, error, captchaURL, getCaptchaURL}) => {

    const showCaptcha = () => {
        const changeCaptchaImage = () => {
            getCaptchaURL()
        }

        if (captchaURL) {
            return (
                <div>
                    <img src={captchaURL} alt="captcha"/>
                    {CreateField("captcha", Input, "text", [required], "write text from image here")}
                    <button onClick={changeCaptchaImage}>Change image</button>
                </div>
            )
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {CreateField("login", Input, "text", [required, isEmail], "login")}
            {CreateField("password", Input, "password", required, "password")}
            {CreateField("rememberMe", Input, "checkbox", null, null, null, "remember me")}
            {showCaptcha()}
            <div>
                <button>Login</button>
            </div>

            {error && <div>{error}</div>}

        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)