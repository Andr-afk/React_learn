import React from "react";
import classes from "./AnotherUser.module.css";

const AnotherUser = (props) => {

    const subscribe = () => {
        return (props.isFriend) ? "Unfollow" : "Follow"
    }

    const changeSubscribe = (e) => {
        props.changeSubscribe(e.target.id)
    }


    return (
        <div className={classes.main}>
            <div className={classes.picture}><img
                src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"/></div>
            <button id={props.id} onClick={changeSubscribe}>{subscribe()}</button>
            <div className={classes.info}>
                <div className={classes.fullName}>{`${props.name} ${props.secondName[0]}.`}</div>
                <div className={classes.status}>{props.status}</div>
                <div className={classes.location}>{props.country}<br/>{props.city}</div>
            </div>
        </div>
    )
}

export default AnotherUser
