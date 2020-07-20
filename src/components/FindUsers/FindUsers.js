import React from "react";
import classes from "./FindUsers.module.css";
import axios from "axios";
import default_avatar from "../../assets/images/default_avatar.png"


const FindUsers = (props) => {

    let getUser = ()=>{
        if (props.FindUsersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4')
                .then(response => {
                    props.setUser(response.data.items)
                })
        }
    }



    let subscribe = (isFriend) => {
        return (isFriend) ? "Unfollow" : "Follow"
    }

    let changeSubscribe = (e) => {
        props.changeSubscribe(e.target.id)
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.title}><h3>Users</h3></div>
            <button onClick={getUser}>Get more User</button>
            <div className={classes.anotherUsers}>
                {
                    props.FindUsersPage.users.map((element) => {
                        return (
                            <div className={classes.main}>
                                <div className={classes.picture}>
                                    <img src={element.photos.small || default_avatar}/>
                                </div>
                                <button id={element.id} onClick={changeSubscribe}>{subscribe(element.followed)}</button>
                                <div className={classes.info}>
                                    <div
                                        className={classes.fullName}>{element.name}</div>
                                    <div className={classes.status}>{element.status}</div>
                                    {/*<div className={classes.location}>{element.country}<br/>{element.city}</div>*/}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FindUsers