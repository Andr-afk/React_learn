import React from "react"
import Redirect from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const x = (props) => {
        if (!props.isAuth) return <Redirect to="/login"/>
        else return <Component {...props}/>
    }

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

    return connect(mapStateToProps)(x)
}