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

const FindUsersContainer = (props) =>{
    useEffect(()=>{
        props.getUsers(props.pageSize, props.currentPage)
    },[props.users.length])

    const OnFollow = (e) => {
        let userID = Number(e.target.id)
        props.followToUser(userID)
    }

    const OnUnfollow = (e) => {
        let userID = Number(e.target.id)
        props.unfollowFromUser(userID)
    }

    const OnchangePages = (e) => {
        switch (e.target.innerText) {
            case '((':
                props.getUsers(props.pageSize, 1)
                break;

            case '(':
                props.getUsers(props.pageSize, props.currentPage - 1)
                break;

            case ')':
                props.getUsers(props.pageSize, props.currentPage + 1)
                break;
            case '))':
                let last_page = Math.ceil(props.usersCount / props.pageSize)
                props.getUsers(props.pageSize, last_page)
                break
            default:

                props.getUsers(props.pageSize, 1)
                break
        }
    }

    return(
        <div className={classes.mai}>
            {
                props.isFetching
                    ? <Preloader className={classes.preloader}/>
                    : <FindUsers users={props.users}
                                 currentPage={props.currentPage}
                                 OnchangePages={OnchangePages}
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
