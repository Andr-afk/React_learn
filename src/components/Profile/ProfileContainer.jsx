import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setProfile, updateStatusThunkCreator} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
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
        if (!userID) userID = 9558

        this.props.getProfile(userID)

    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.ProfilePage.status
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