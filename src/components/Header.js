import React from 'react';
import styles from './Header.module.css';

function Header({ setPage, currentPage }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li
                    className={`${styles.navItem} ${currentPage === 'home' ? styles.active : ''}`}
                    onClick={() => setPage('home')}
                >
                    Home
                </li>
                <li
                    className={`${styles.navItem} ${currentPage === 'about' ? styles.active : ''}`}
                    onClick={() => setPage('about')}
                >
                    About Us
                </li>
                <li
                    className={`${styles.navItem} ${currentPage === 'contact' ? styles.active : ''}`}
                    onClick={() => setPage('contact')}
                >
                    Contact Us
                </li>
            </ul>
        </nav>
    );
}

export default Header;
