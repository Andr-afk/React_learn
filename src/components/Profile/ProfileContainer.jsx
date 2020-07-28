import React from "react";
import Profile from "./Profile";
import axios from "axios"
import {connect} from "react-redux";
import {getProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainerComponent extends React.Component {
    render() {
        return <Profile profile={this.props.profile}/>
    }

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.getProfile(response.data)
            })
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let mapDispatchToProps = ({
    getProfile
})



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainerComponent))
export default ProfileContainer