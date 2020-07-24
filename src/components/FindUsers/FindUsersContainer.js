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
    /*constructor(props) {
        super(props);
    }*/

    OnchangeSubscribe = (e) => {
        this.props.changeSubscribe(e.target.id)
    }

    subscribe = (isFriend) => {
        return (isFriend) ? "Unfollowed" : "Followed"
    }

    OnchangePages = (e) => {
        this.props.toggleIsFetching(true)
        let number = Number(e.target.innerText)
        let pageSize = 4 // i will add it in state

        this.props.changePages(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${number}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)


            })
    }


    render() {
        return (
            <>
            {this.props.FindUsersPage.isFetching ? <Preloader /> :<div>{null}</div> }
            <FindUsers FindUsersPage={this.props.FindUsersPage}
                       OnchangeSubscribe={this.OnchangeSubscribe}
                       subscribe={this.subscribe}
                       OnchangePages={this.OnchangePages}
                       toggleIsFetching={this.props.toggleIsFetching}
            />
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

/*let mapDispatchToProps = (dispatch) => (
    {
        changeSubscribe: (id) => {
            dispatch(changeSubscribeAC(id))
        },
        setUser: (array) => {
            dispatch(setUserAC(array))
        },
        setUserPages: (usersCount, pageSize) => {
            dispatch(setUsersPagesAC(usersCount, pageSize))
        },
        changePages: (currentPage) => {
            dispatch(changePagesAC(currentPage))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
)*/

let mapDispatchToProps = ({
    changeSubscribe,
    setUser,
    setUserPages,
    changePages,
    toggleIsFetching
})

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersContainerComponent)

export default FindUsersContainer