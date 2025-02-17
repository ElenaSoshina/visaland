import React, {useState} from 'react';
import styles from './Header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.visa}>VISA</span>
                <span className={styles.land}>LAND</span>
            </div>
            <button className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О компании</a></li>
                    <li><a href="/services">Услуги</a></li>
                    <li><a href="/prices">Цены</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;