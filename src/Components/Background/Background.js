import React from 'react';
import classes from './Background.module.css';
import BgDark from '../../assets/images/bg-desktop-dark.jpg';

const Background = () => {
    return (
        <div className={classes.background}>
            <img src={BgDark} alt=""/>
        </div>
    );
};

export default Background;