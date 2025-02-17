import React, { useState } from "react";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal"; // Подключаем модальное окно

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модалки

    return (
        <>
            <header className={`${styles.header} ${isModalOpen ? styles.noFixed : ""}`}>
                <div className={styles.logo}>
                    <span className={styles.visa}>VISA</span>
                    <span className={styles.land}>LAND</span>
                </div>
                <button className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                <nav>
                    <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О компании</a></li>
                        <li><a href="/services">Услуги</a></li>
                        <li><a href="/prices">Цены</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                    </ul>
                </nav>
            </header>

            {/* Модальное окно */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Header;
