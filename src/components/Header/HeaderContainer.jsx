import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator, setAuthUserData, setImagesUsers} from "../../redux/auth-reducer";


const HeaderContainer = ({isAuth, ...props})=>{
    useEffect(()=>{
        if(!isAuth) props.authMe()
    }, [isAuth])

    return(
        <Header isAuth={isAuth} {...props}/>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.img
})

export default connect(mapStateToProps, {setAuthUserData, setImagesUsers, authMe: authMeThunkCreator})(HeaderContainer)