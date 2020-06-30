import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo mainImage="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg"
                         avaImage="https://www.tokkoro.com/picsup/5439677-funny-wallpapers.jpg"/>
            <MyPosts dataPost={props.dataPost}/>
        </div>
    )
}

export default Profile