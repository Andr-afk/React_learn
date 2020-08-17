import React from "react";
import classes from "./FindUsers.module.css";
import ChangePageButton from "./ChangePageButtons";
import User from "./User";


const FindUsers = (props) => {
    const {users, currentPage, OnChangePages, OnFollow, OnUnfollow, followingProgress} = props

    return (
        <div className={classes.wrapper}>

            <ChangePageButton OnChangePages={OnChangePages} currentPage={currentPage}/>

            <div className={classes.Users}>
                {users.map((element) => (<User key={element.id}
                                               user={element}
                                               OnUnfollow={OnUnfollow}
                                               OnFollow={OnFollow}
                                               followingProgress={followingProgress}/>))}
            </div>
        </div>
    )

}

export default FindUsers

