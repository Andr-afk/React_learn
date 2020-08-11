import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logoutMeThunkCreator} from "../../redux/auth-reducer"

const Settings = (props) => {

    if (!props.isAuth) return <Redirect to='login'/>

    return (
        <div>
            If you want to exit from your account, press the button
            <button onClick={props.logoutMe}>Exit account</button>
        </div>
    )
}

let mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = {
    logoutMe: logoutMeThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)
