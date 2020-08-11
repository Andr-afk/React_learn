import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setProfile, updateStatusThunkCreator} from "../../redux/profilePage-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";


class ProfileContainerComponent extends React.Component {
    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }

    componentDidMount() {

        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.authorizedUserID
            if (!userID) return <Redirect to='/login'/>
        }


        this.props.getProfile(userID)

    }
}

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainerComponent)

// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainerComponent))
// export default ProfileContainer