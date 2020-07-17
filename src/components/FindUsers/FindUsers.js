import React from "react";
import classes from "./FindUsers.module.css";
import AnotherUser from "./AnotherUser/AnotherUser";


const FindUsers = (props) => {

    let subscribe = (isFriend) => {
        console.log('method work')
        return (isFriend) ? "Unfollow" : "Follow"
    }

    let changeSubscribe = (e) => {
        props.changeSubscribe(e.target.id)
        console.log(e.target.innerText)
    }
    let user_elements = props.FindUsersPage.users.map((element) => {
        return (
            <div className={classes.main}>
                <div className={classes.picture}><img
                    src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"/></div>
                <button id={element.id} onClick={changeSubscribe}>{subscribe(element.isFriend)}</button>
                <div className={classes.info}>
                    <div className={classes.fullName}>{`${element.name} ${element.secondName[0]}.`}</div>
                    <div className={classes.status}>{element.status}</div>
                    <div className={classes.location}>{element.country}<br/>{element.city}</div>
                </div>
            </div>
        )
    })


    return (
        <div className={classes.wrapper}>
            <div className={classes.title}><h3>Users</h3></div>
            <div className={classes.anotherUsers}>
                {user_elements}
            </div>
        </div>
    )
}

export default FindUsers