import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        About Us
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
