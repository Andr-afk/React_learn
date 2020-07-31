import React from "react";
import {connect} from "react-redux";
import {
    changeSubscribe,
    setUser,
    setUserPages,
    changePages,
    toggleIsFetching,
    toggleFollowingProgress
} from "../../redux/findUsersPage-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class FindUsersContainerComponent extends React.Component {


    OnFollow = (e) => {
        let userID = Number(e.target.id)
        this.props.toggleFollowingProgress(userID,true)
        this.props.toggleIsFetching(userID)

        usersAPI.FollowToUser(userID)
            .then(data => {
                if (data.resultCode === 0) this.props.changeSubscribe(userID)
                else console.log(data.messages)

                this.props.toggleFollowingProgress(userID,false)
                this.props.toggleIsFetching(false)
            })
            .catch(error=>{
                this.props.toggleFollowingProgress(userID,false)
                this.props.toggleIsFetching(false)

                console.log(error)
            })


    }

    OnUnfollow = (e) => {
        let userID = Number(e.target.id)
        this.props.toggleFollowingProgress(userID, true)
        this.props.toggleIsFetching(true)


        usersAPI.UnfollowFromUser(userID)
            .then(data => {
                if (data.resultCode === 0)this.props.changeSubscribe(userID)
                else console.log(data.messages)

                this.props.toggleFollowingProgress(userID,false)
                this.props.toggleIsFetching(false)
            })
            .catch(error => {
                this.props.toggleFollowingProgress(userID,false)
                this.props.toggleIsFetching(false)

                console.log(error)
            })

    }


    OnchangePages = (e) => {
        this.props.toggleIsFetching(true)
        let number = this.props.currentPage
        let pageSize = 10

        switch (e.target.innerText) {
            case '((':
                this.props.changePages(1)
                usersAPI.getUsers(pageSize, 1)
                    .then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(data.items)
                    })

                break;

            case '(':
                this.props.changePages(--number)
                usersAPI.getUsers(pageSize, number--)
                    .then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(data.items)
                    })
                break;

            case ')':
                this.props.changePages(++number)

                usersAPI.getUsers(pageSize, number++)
                    .then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(data.items)
                    })
                break;
            case '))':
                number = Math.ceil(this.props.usersCount / this.props.pageSize)
                this.props.changePages(number)

                usersAPI.getUsers(pageSize, number)
                    .then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(data.items)
                    })
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

    componentDidMount() {
        this.props.toggleIsFetching(true)
        let pageSize = 10 // maybe enter this variable in constructor?

        usersAPI.getUsers(pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUser(data.items)
                this.props.setUserPages(data.totalCount, pageSize)

            })
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
    changeSubscribe,
    setUser,
    setUserPages,
    changePages,
    toggleIsFetching,
    toggleFollowingProgress
})

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersContainerComponent)

export default FindUsersContainer