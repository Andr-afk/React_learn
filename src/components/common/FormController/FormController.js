import React from "react";
import {Field} from "redux-form";

export const Textarea = ({input, placeholder, meta: {error, touched}}) => {
    return (
        <div>
            <textarea {...input} placeholder={placeholder}/>
            {
                error && touched
                    ? <span>{error}</span>
                    : null
            }
        </div>
    )
}

export const Input = ({input, placeholder, meta: {error, touched}, type}) => {
    return (
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {
                error && touched
                    ? <span>{error}</span>
                    : null
            }
        </div>
    )
}

export const CreateField = (name, component, type, validators, placeholder = "", props ={}, text="") => {
    return (
        <div>
            <Field name={name}
                   component={component}
                   type={type}
                   validate={validators}
                   placeholder={placeholder}
                   {...props}/> {text}
        </div>
    )
}