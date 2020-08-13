import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setProfile, updateStatusThunkCreator} from "../../redux/profilePage-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/RedirecterToLogin";
import {compose} from "redux";


// class ProfileContainerComponent extends React.Component {
//     render() {
//         return <Profile profile={this.props.profile}
//                         status={this.props.status}
//                         updateStatus={this.props.updateStatus}/>
//     }
//
//     componentDidMount() {
//
//         let userID = this.props.match.params.userID
//         if (!userID) {
//             userID = this.props.authorizedUserID
//             if (!userID) return <Redirect to='/login'/>
//         }
//
//
//         this.props.getProfile(userID)
//
//     }
// }

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




const ProfileContainer = (props)=>{
    useEffect(()=>{
        let userID = props.match.params.userID
         if (!userID) {
             userID = props.authorizedUserID
             if (!userID) return <Redirect to='/login'/>
         }


         props.getProfile(userID)
    },[props.match.params.userID])

    return(
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