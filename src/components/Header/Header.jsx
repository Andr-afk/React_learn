import React from 'react'; // если директория не указывается, значит импортируется из node_modules
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import preloader from "../../assets/images/preloader.gif"


const Header = (props) => {

    let main_content = () => {
        if (props.isAuth) {
            return (
                <div className={classes.info}>
                    <div>{props.login}</div>
                    <img src={props.img||preloader} alt="avatar"/>
                </div>
            )
        } else {
            return <NavLink to='/login'>Login</NavLink>
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.loginArea}>
                {main_content()}
            </div>
            <img src='https://liblessons.ru/wp-content/uploads/2019/02/css-grids.png' alt="logo"/>
        </header>
    )

}

export default Header

