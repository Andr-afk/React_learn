import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    followToUserThunkCreator,
    unfollowFromUserThunkCreator
} from "../../redux/findUsersPage-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";


class FindUsersContainerComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    OnFollow = (e) => {
        let userID = Number(e.target.id)
        this.props.followToUser(userID)
    }

    OnUnfollow = (e) => {
        let userID = Number(e.target.id)
        this.props.unfollowFromUser(userID)
    }

    OnchangePages = (e) => {
        switch (e.target.innerText) {
            case '((':

                this.props.getUsers(this.props.pageSize, 1)
                break;

            case '(':

                this.props.getUsers(this.props.pageSize, this.props.currentPage - 1)
                break;

            case ')':

                this.props.getUsers(this.props.pageSize, this.props.currentPage + 1)
                break;
            case '))':

                let last_page = Math.ceil(this.props.usersCount / this.props.pageSize)
                this.props.getUsers(this.props.pageSize, last_page)
                break
            default:

                this.props.getUsers(this.props.pageSize, 1)
                break
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <div>{null}</div>}
                <FindUsers users={this.props.users}
                           pageSize={this.props.pageSize}
                           usersCount={this.props.usersCount}
                           currentPage={this.props.currentPage}
                           isFetching={this.props.isFetching}
                           followingProgress={this.props.followingProgress}
                           OnchangePages={this.OnchangePages}
                           subscribe={this.subscribe}
                           OnFollow={this.OnFollow}
                           OnUnfollow={this.OnUnfollow}
                           toggleIsFetching={this.props.toggleIsFetching}
                           toggleFollowingProgress={this.props.toggleFollowingProgress}/>

            </>
        )
    }


}


let mapStateToProps = (state) => {
    return {
        users: state.FindUsersPage.users,
        pageSize: state.FindUsersPage.pageSize,
        usersCount: state.FindUsersPage.usersCount,
        currentPage: state.FindUsersPage.currentPage,
        isFetching: state.FindUsersPage.isFetching,
        followingProgress: state.FindUsersPage.followingProgress,

    }
}


let mapDispatchToProps = ({
    getUsers: getUsersThunkCreator,
    followToUser: followToUserThunkCreator,
    unfollowFromUser: unfollowFromUserThunkCreator
})

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersContainerComponent)

export default FindUsersContainer