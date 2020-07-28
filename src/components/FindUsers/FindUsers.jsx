import React from "react";
import classes from "./FindUsers.module.css";
import default_avatar from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";


const FindUsers = (props) => {

    let pagesCount = Math.ceil(props.FindUsersPage.usersCount / props.FindUsersPage.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}><h3>Users</h3></div>
            <div className={classes.pages}>
                <button onClick={props.OnchangePages}>((</button>
                <button onClick={props.OnchangePages}>(</button>
                <span>{props.FindUsersPage.currentPage}</span>
                <button onClick={props.OnchangePages}>)</button>
                <button onClick={props.OnchangePages}>))</button>


            </div>
            <div className={classes.anotherUsers}>
                {
                    props.FindUsersPage.users.map((element) => {
                        return (
                            <div className={classes.main} key={element.id}>
                                <div className={classes.picture}>
                                    <NavLink to={'/profile/' + element.id}>
                                        <img src={element.photos.small || default_avatar} alt=''/>
                                    </NavLink>
                                </div>
                                <button id={element.id}
                                        onClick={props.OnchangeSubscribe}>{props.subscribe(element.followed)}</button>
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
        </div>)

}

export default FindUsers


{/*{
                    pages.map((number, index) => {
                        return <button onClick={props.OnchangePages}
                                       key={index}
                                       className={props.FindUsersPage.currentPage && classes.selectedPage}>{number}</button>
                    })
                }*/}