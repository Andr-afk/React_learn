import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setProfile} from "../../redux/profilePage-reducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";


class ProfileContainerComponent extends React.Component {
    render() {
        return <Profile profile={this.props.profile}/>
    }

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = 9558

        this.props.getProfile(userID)

    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth
})

let mapDispatchToProps = ({
    setProfile,
    getProfile: getProfileThunkCreator
})


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainerComponent)

// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainerComponent))
// export default ProfileContainer