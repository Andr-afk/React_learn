import React from "react";
import classes from "./OftenFriend.module.css"

const OftenFriend = (props) => {
    return (
        <div className={classes.OftenFriends}>
            <a href = "#S">
                <img src={props.image} alt="your friend"/>
                <div className={classes.name}>{props.name}</div>
            </a>

        </div>
    )
}

export default OftenFriend
