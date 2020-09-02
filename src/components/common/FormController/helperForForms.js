import {reset} from "redux-form"

export const clearForm = (formName)=>{
    return reset(formName)
}