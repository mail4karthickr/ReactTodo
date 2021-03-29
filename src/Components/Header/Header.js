import React from 'react';
import iconSun from '../../assets/images/icon-sun.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.display}>
            <h1 className={classes.title}>TODO</h1>
            <img src={iconSun} alt=""/>
        </div>
    );
};

export default Header;