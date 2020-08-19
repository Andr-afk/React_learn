import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    followToUserThunkCreator,
    unfollowFromUserThunkCreator
} from "../../redux/findUsersPage-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {
    takeCurrentPage, takeFollowingProgress,
    takeIsFetching,
    takePageSize,
    takeUsers,
    takeUsersCount
} from "../../redux/selectors/FindUsersSelectors";
import classes from "./FindUsersContainer.module.css"

const FindUsersContainer = ({pageSize, currentPage, getUsers, users, ...props}) => {

    useEffect(() => {
        getUsers(pageSize, currentPage)
    }, [])

    const OnFollow = (e) => {
        let userID = Number(e.target.id)
        props.followToUser(userID)
    }

    const OnUnfollow = (e) => {
        let userID = Number(e.target.id)
        props.unfollowFromUser(userID)
    }


    const OnChangePages = (e)=>{
        const numberPage = Number(e.target.innerText)
        getUsers(pageSize, numberPage)
    }

    return (
        <div className={classes.mai}>
            {
                props.isFetching
                    ? <Preloader className={classes.preloader}/>
                    : <FindUsers users={users}
                                 currentPage={currentPage}
                                 OnChangePages={OnChangePages}
                                 OnFollow={OnFollow}
                                 OnUnfollow={OnUnfollow}
                                 followingProgress={props.followingProgress}/>
            }
        </div>
    )


}


let mapStateToProps = (state) => {
    return {
        users: takeUsers(state),
        pageSize: takePageSize(state),
        usersCount: takeUsersCount(state),
        currentPage: takeCurrentPage(state),
        isFetching: takeIsFetching(state),
        followingProgress: takeFollowingProgress(state),

    }
}


let mapDispatchToProps = ({
    getUsers: getUsersThunkCreator,
    followToUser: followToUserThunkCreator,
    unfollowFromUser: unfollowFromUserThunkCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer)
