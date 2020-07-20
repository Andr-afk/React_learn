import React from "react";
import FindUsers from "./FindUsers"
import {connect} from "react-redux";
import {changeSubscribeAction, setUserAction} from "../../redux/findUsersPage-reducer";

let mapStateToProps = (state) => {
    return {
        FindUsersPage: state.FindUsersPage
    }
}

let mapDispatchToProps = (dispatch) => (
    {
        changeSubscribe: (id) => {
            dispatch(changeSubscribeAction(id))
        },
        setUser: (array) => {
            dispatch(setUserAction(array))
        }
    }
)

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer