import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom"


const Dialog = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.item}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default React.memo(Dialog)