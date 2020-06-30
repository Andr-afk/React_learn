import React from 'react'; // если директория не указывается, значит импортируется из node_modules
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://liblessons.ru/wp-content/uploads/2019/02/css-grids.png' alt="logo"/>
        </header>
    )

}

export default Header