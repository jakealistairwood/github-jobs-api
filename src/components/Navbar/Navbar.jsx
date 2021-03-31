import React from 'react';
import styles from './Navbar.module.scss';
import LogoIcon from '../../img/desktop/logo.svg';
import Switch from './Switch';

const Navbar = ({ isToggled, onToggle, toggleTheme }) => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <img src={LogoIcon} alt="devjobs-logo"/>
                <Switch isToggled={isToggled} onToggle={onToggle} toggleTheme={toggleTheme} />
            </div>
        </div>
    )
}

export default Navbar;
