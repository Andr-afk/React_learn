import React from "react";
import classes from "./FindUsers.module.css";

const ChangePageButton = ({OnChangePages, currentPage, ...restProps}) => {
    return (
        <div>
            <div className={classes.title}><h3>Users</h3></div>
            <div className={classes.pages}>
                <button onClick={OnChangePages}>((</button>
                <button onClick={OnChangePages}>(</button>
                <span>{currentPage}</span>
                <button onClick={OnChangePages}>)</button>
                <button onClick={OnChangePages}>))</button>
            </div>
        </div>
    )
}

export default ChangePageButton
