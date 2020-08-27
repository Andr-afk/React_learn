import React from "react";
import {Field} from "redux-form";

export const Textarea = ({input, placeholder, meta: {error, touched}}) => {
    return (
        <>
            <textarea {...input} placeholder={placeholder}/>
            {
                error && touched
                    ? <span>{error}</span>
                    : null
            }
        </>
    )
}

export const Input = ({input, placeholder, meta: {error, touched}, type}) => {
    return (
        <>
            <input {...input} placeholder={placeholder} type={type}/>
            {
                error && touched
                    ? <span>{error}</span>
                    : null
            }
        </>
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