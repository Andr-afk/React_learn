import classes from "./FindUsers.module.css";
import {NavLink} from "react-router-dom";
import default_avatar from "../../assets/images/default_avatar.png";
import React from "react";


const User = ({user, OnUnfollow, OnFollow, followingProgress}) => {

    const DisableButton = (id) => {
        return followingProgress.find(userID => userID === id)
    }

    const ShowStatusFollow = (followed, id) => {
        const showButton = (text_button) => {
            let changeStatusFollow
            (text_button === "Unfollow") ? changeStatusFollow = OnUnfollow : changeStatusFollow = OnFollow
            return <button disabled={DisableButton(id)}
                           onClick={changeStatusFollow}
                           id={id}>{text_button}</button>
        }

        if (followed) return showButton("Unfollow")
        else return showButton("Follow")
    }

    return (
        <div className={classes.main} key={user.id}>
            <div className={classes.picture}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small || default_avatar} alt=''/>
                </NavLink>
            </div>

            {ShowStatusFollow(user.followed, user.id)}

            <div className={classes.info}>
                <div
                    className={classes.fullName}>{user.name}</div>
                <div className={classes.status}>{user.status}</div>
                {/*<div className={classes.location}>{country}<br/>{city}</div>*/}
            </div>
        </div>
    )
}

export default React.memo(User)
