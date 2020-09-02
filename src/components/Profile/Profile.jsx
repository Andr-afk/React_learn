import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo mainImage="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"
                         isOwner={props.isOwner}
                         isFetching={props.isFetching}
                         profile={props.profile}
                         status={props.status}
                         uploadPhoto={props.uploadPhoto}
                         updateStatus={props.updateStatus}
                         uploadAboutMe={props.uploadAboutMe}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default React.memo(Profile)