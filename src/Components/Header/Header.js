import React from 'react';
import iconSun from '../../assets/images/icon-sun.svg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.display}>
            <h1 className={classes.title}>TODO</h1>
        </div>
    );
};
export default Header;