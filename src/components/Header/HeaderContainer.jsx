import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator, setAuthUserData, setImagesUsers} from "../../redux/auth-reducer";


// class HeaderContainer extends React.Component {
//
//     componentDidMount() {
//         this.props.authMe()
//     }
//
//     render() {
//         return <Header {...this.props}/>
//     }
// }





const HeaderContainer = (props)=>{
    useEffect(()=>{
        props.authMe()
    }, [props.isAuth])

    return(
        <Header {...props}/>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.img
})

export default connect(mapStateToProps, {setAuthUserData, setImagesUsers, authMe: authMeThunkCreator})(HeaderContainer)