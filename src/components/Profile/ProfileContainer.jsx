import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setProfile, updateStatusThunkCreator} from "../../redux/profilePage-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.ProfilePage.status,
    authorizedUserID: state.auth.userID
})

let mapDispatchToProps = ({
    setProfile,
    getProfile: getProfileThunkCreator,
    updateStatus: updateStatusThunkCreator
})


const ProfileContainer = ({match, authorizedUserID, getProfile, ...props}) => {
    useEffect(() => {
        let userID = match.params.userID
        if (!userID) {
            userID = authorizedUserID
            if (!userID) return <Redirect to='/login'/>
        }

        getProfile(userID)
    }, [match.params.userID])

    return (
        <Profile profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}/>
    )
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer)