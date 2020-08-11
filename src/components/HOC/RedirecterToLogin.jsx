import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect(Component) {

    class x extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            else return <Component {...this.props}/>
        }

    }

    return connect(mapStateToPropsForRedirect)(x)
}


