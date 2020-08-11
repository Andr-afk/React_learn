import React from "react";


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