import React from "react";
import {connect} from "react-redux";
import {
    changeSubscribe,
    setUser,
    setUserPages,
    changePages,
    toggleIsFetching
} from "../../redux/findUsersPage-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class FindUsersContainerComponent extends React.Component {


    OnFollow = (e) => {
        this.props.toggleIsFetching(true)
        let userID = e.target.id

        usersAPI.FollowToUser(userID)
            .then(data => {
                this.props.toggleIsFetching(false)
                if (data.resultCode === 0) this.props.changeSubscribe(userID)
                else console.log(data.messages)
            })
    }

    OnUnfollow = (e) => {
        this.props.toggleIsFetching(true)
        let userID = e.target.id

        usersAPI.UnfollowFromUser(userID)
            .then(data => {
                this.props.toggleIsFetching(false)
                if (data.resultCode === 0) this.props.changeSubscribe(userID)
                else console.log(data.messages)
            })
    }


    OnchangePages = (e) => {
        this.props.toggleIsFetching(true)
        let number = this.props.FindUsersPage.currentPage
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
                number = Math.ceil(this.props.FindUsersPage.usersCount / this.props.FindUsersPage.pageSize)
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
                {this.props.FindUsersPage.isFetching ? <Preloader/> : <div>{null}</div>}
                <FindUsers FindUsersPage={this.props.FindUsersPage}
                           OnchangePages={this.OnchangePages}
                           subscribe={this.subscribe}
                           OnFollow={this.OnFollow}
                           OnUnfollow={this.OnUnfollow}
                           toggleIsFetching={this.props.toggleIsFetching}/>
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
        FindUsersPage: state.FindUsersPage
    }
}


let mapDispatchToProps = ({
    changeSubscribe,
    setUser,
    setUserPages,
    changePages,
    toggleIsFetching
})

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersContainerComponent)

export default FindUsersContainer