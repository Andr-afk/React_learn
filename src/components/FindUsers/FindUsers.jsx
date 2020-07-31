import React from "react";
import classes from "./FindUsers.module.css";
import default_avatar from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";


const FindUsers = (props) => {


    return (
        <div className={classes.wrapper}>
            <div className={classes.title}><h3>Users</h3></div>
            <div className={classes.pages}>
                <button onClick={props.OnchangePages}>((</button>
                <button onClick={props.OnchangePages}>(</button>
                <span>{props.currentPage}</span>
                <button onClick={props.OnchangePages}>)</button>
                <button onClick={props.OnchangePages}>))</button>


            </div>
            <div className={classes.anotherUsers}>
                {
                    props.users.map((element) => {

                        return (
                            <div className={classes.main} key={element.id}>
                                <div className={classes.picture}>
                                    <NavLink to={'/profile/' + element.id}>
                                        <img src={element.photos.small || default_avatar} alt=''/>
                                    </NavLink>
                                </div>
                                {element.followed ?
                                    <button disabled={props.followingProgress.some(userID=> userID === element.id)} onClick={props.OnUnfollow}
                                            id={element.id}>Unfollow</button> :
                                    <button disabled={props.followingProgress.some(userID=> userID === element.id)} onClick={props.OnFollow}
                                            id={element.id}>Follow</button>}
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
                                       className={props.currentPage && classes.selectedPage}>{number}</button>
                    })
                }*/
}