import React from 'react';
import styles from './Switch.module.scss';
import SunIcon from '../../../img/desktop/icon-sun.svg';
import MoonIcon from '../../../img/desktop/icon-moon.svg';

const Switch = ({ isToggled, onToggle, toggleTheme }) => {
    return (
        <div className={styles.switch}>
            <img className={styles.switch__lightModeIcon} src={SunIcon} alt="light-mode-icon"/>
            <label htmlFor="toggleSwitch" className={styles.switch__themeSwitch}>
                <input 
                    type="checkbox" 
                    id="toggleSwitch" 
                    checked={isToggled} 
                    onChange={() => {
                        onToggle()
                        toggleTheme()
                    }} 
                />
                <span className={styles.switch__themeSlider}></span>
            </label>
            <img className={styles.switch__darkModeIcon} src={MoonIcon} alt="dark-mode-icon"/>
        </div>
    )
}

export default Switch;
