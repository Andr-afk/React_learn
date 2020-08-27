import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormController/FormController";
import React from "react";


const AboutMeForm = ({profile, handleSubmit, error}) => {

    const putField = (label, name, type = "text", component = null, validators = null) => {
        return (
            <div>
                <label>{label}</label>
                <Field name={name}
                       component={component || Input}
                       type={type}
                       placeholder={label}
                       parse={value => !value ? null : value}
                       validate={validators}/>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {putField("Full Name", "fullName")}
            </div>
            <div>
                {putField("About me", "aboutMe", "text", Textarea)}
            </div>
            <div>
                <label>My contacts:</label>
                <ul>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <li key={key}>
                                {putField(key, "contacts." + key, "text", Input)}
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {putField("Do you search work?", "lookingForAJob", "checkbox", Input)}
                </div>
                <div>
                    {putField("Job description", "lookingForAJobDescription", "textarea", Textarea)}
                </div>
                <button>Update data</button>
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default reduxForm({form: "about_me"})(AboutMeForm)