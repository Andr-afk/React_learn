import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api"



class ProfileContainerComponent extends React.Component {
    render() {
        return <Profile profile={this.props.profile}/>
    }

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = 9558

        profileAPI.getProfile(userID)
            .then(data => {
                this.props.setProfile(data)
            })
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let mapDispatchToProps = ({
    setProfile
})



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainerComponent))
export default ProfileContainer