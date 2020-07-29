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
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class FindUsersContainerComponent extends React.Component {


    OnFollow = (e) => {
        this.props.toggleIsFetching(true)
        let userID = e.target.id
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userID, null, {
            withCredentials: true,
            headers: {"API-KEY": "797474b9-50fc-4fc9-a76e-e3b283259805"}
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                if (response.data.resultCode === 0) this.props.changeSubscribe(userID)
                else console.log(response.data.messages)
            })
    }

    OnUnfollow = (e) => {
        this.props.toggleIsFetching(true)
        let userID = e.target.id
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userID, {
            withCredentials: true,
            headers: {"API-KEY": "797474b9-50fc-4fc9-a76e-e3b283259805"}
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                if (response.data.resultCode === 0) this.props.changeSubscribe(userID)
                else console.log(response.data.messages)
            })
    }


    OnchangePages = (e) => {
        this.props.toggleIsFetching(true)
        let number = this.props.FindUsersPage.currentPage

        switch (e.target.innerText) {
            case '((':
                this.props.changePages(1)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=1`, {withCredentials: true})
                    .then(response => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })

                break;

            case '(':
                this.props.changePages(--number)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number--}`, {withCredentials: true})
                    .then(response => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })
                break;

            case ')':
                this.props.changePages(++number)

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number++}`, {withCredentials: true})
                    .then(response => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })
                break;
            case '))':
                number = Math.ceil(this.props.FindUsersPage.usersCount / this.props.FindUsersPage.pageSize)
                this.props.changePages(number)

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number}`, {withCredentials: true})
                    .then(response => {
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
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
        let pageSize = 4 // maybe enter this variable in constructor?
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=1`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
                this.props.setUserPages(response.data.totalCount, pageSize)

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