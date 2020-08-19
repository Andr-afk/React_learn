import React from "react";
import classes from "./FindUsers.module.css";
import Paginator from "../common/ChangePageButtons";
import User from "./User";


const FindUsers = (props) => {
    const {users, currentPage, OnChangePages, OnFollow, OnUnfollow, followingProgress} = props

    return (
        <div className={classes.wrapper}>
            {/*<ChangePageButton OnChangePages={OnChangePages} currentPage={currentPage}/>*/}
            <Paginator portionSize={10} totalCount={900} OnChangePages={props.OnChangePages}/>
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

