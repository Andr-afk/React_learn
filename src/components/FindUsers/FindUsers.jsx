import React from "react";
import classes from "./FindUsers.module.css";
import Paginator from "../common/ChangePageButtons";
import User from "./User";


const FindUsers = (props) => {
    const {users, usersCount, portionSize, OnFollow, OnUnfollow, followingProgress} = props

    return (
        <div className={classes.wrapper}>
            <Paginator portionSize={portionSize} totalCount={usersCount} OnClickButton={props.OnChangePages} currentPage={props.currentPage}/>
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

