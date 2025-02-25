import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Функция для открытия/закрытия меню
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <span className={styles.visa}>VISA</span>
                        <span className={styles.land}>LAND</span>
                    </div>
                    {/* Меню для десктопа */}
                    <nav className={`${styles.navLinks} ${menuOpen ? styles.hideOnMobile : ""}`}>
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/about">О компании</a></li>
                            <li><a href="/services">Услуги</a></li>
                            <li><a href="/prices">Цены</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                        </ul>
                    </nav>
                </div>



                <div className={styles.rightSection}>
                    <div className={styles.messengers}>
                        <a href="https://wa.me/your-whatsapp" className={styles.messengerButton}>
                            <FaWhatsapp className={styles.icon} />
                            <span className={styles.managerText}>Менеджер</span>
                        </a>
                        <a href="https://t.me/your-telegram" className={styles.messengerButton}>
                            <FaTelegramPlane className={styles.icon} />
                            <span className={styles.managerText}>Менеджер</span>
                        </a>
                    </div>

                    {/* Бургер-меню для мобильных */}
                    <button
                        className={`${styles.burgerMenu} ${menuOpen ? styles.opened : ""}`}
                        onClick={toggleMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

            {/* Выпадающее меню для мобильных */}
            <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                <ul>
                    <li><a href="/" onClick={toggleMenu}>Главная</a></li>
                    <li><a href="/about" onClick={toggleMenu}>О компании</a></li>
                    <li><a href="/services" onClick={toggleMenu}>Услуги</a></li>
                    <li><a href="/prices" onClick={toggleMenu}>Цены</a></li>
                    <li><a href="/contacts" onClick={toggleMenu}>Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
