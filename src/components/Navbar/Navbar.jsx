import React from 'react';
import styles from './Navbar.module.scss';
import LogoIcon from '../../img/desktop/logo.svg';
import Switch from './Switch';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <img src={LogoIcon} alt="devjobs-logo"/>
                <Switch />
            </div>
        </div>
    )
}

export default Navbar;
