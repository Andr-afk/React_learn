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



    OnchangeSubscribe = (e) => {
        this.props.changeSubscribe(e.target.id)
    }

    subscribe = (isFriend) => {
        return (isFriend) ? "Unfollowed" : "Followed"
    }

    OnchangePages = (e) => {
        debugger
        this.props.toggleIsFetching(true)
        let number = this.props.FindUsersPage.currentPage

        switch (e.target.innerText) {
            case '((':
                this.props.changePages(1)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=1`)
                    .then(response=>{
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })

                break;

            case '(':
                this.props.changePages(--number)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number--}`)
                    .then(response=>{
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })
                break;

            case ')':
                this.props.changePages(++number)

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number++}`)
                    .then(response=>{
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })
                break;
            case '))':
                number = Math.ceil(this.props.FindUsersPage.usersCount / this.props.FindUsersPage.pageSize)
                this.props.changePages(number)

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=4&page=${number}`)
                    .then(response=>{
                        this.props.toggleIsFetching(false)
                        this.props.setUser(response.data.items)
                    })
        }
    }


    render() {
        return (
            <>
            {this.props.FindUsersPage.isFetching?<Preloader/>:<div>{null}</div>}
                <FindUsers FindUsersPage={this.props.FindUsersPage}
                           OnchangeSubscribe={this.OnchangeSubscribe}
                           subscribe={this.subscribe}
                           OnchangePages={this.OnchangePages}
                           toggleIsFetching={this.props.toggleIsFetching}/>
            </>
        )
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        let pageSize = 4 // maybe enter this variable in constructor?
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=1`)
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