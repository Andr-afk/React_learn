import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator, setAuthUserData, setImagesUsers} from "../../redux/auth-reducer";


const HeaderContainer = ({isAuth, authMe, ...props})=>{
    useEffect(()=>{
        if(!isAuth) authMe()
    }, [isAuth, authMe])

    return(
        <Header isAuth={isAuth} authMe={authMe}{...props}/>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.img
})

export default connect(mapStateToProps, {setAuthUserData, setImagesUsers, authMe: authMeThunkCreator})(HeaderContainer)