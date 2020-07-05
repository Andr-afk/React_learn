import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import OftenFriend from "./OftenFriend/OftenFriend"; /*Это объект*/


const Nav = (props) => {
    let friend_elements = props.data.friends.map(friend => (<OftenFriend name={friend.name} image={friend.image}/>))
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.OftenFriends}>
                {friend_elements}
            </div>
        </nav>
    )
}

export default Nav