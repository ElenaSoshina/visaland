import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";


const trackUptolike = (platform) => {
    if (window.uptolike && window.uptolike.trackEvent) {
        window.uptolike.trackEvent("click", {
            category: "Social",
            action: "Share",
            label: platform
        });
    }
};

const Header = ({ homeRef, pricesRef, servicesRef, aboutRef, contactsRef, formRef }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Закрываем меню после клика
    };


    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <span className={styles.visa}>VISA</span>
                        <span className={styles.land}>LAND</span>
                    </div>
                    <nav className={`${styles.navLinks} ${menuOpen ? styles.hideOnMobile : ""}`}>
                        <ul>
                            <li>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(homeRef);
                                }}>Главная
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(pricesRef);
                                }}>Цены
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(servicesRef);
                                }}>Услуги
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(aboutRef);
                                }}>Контакты
                                </button>
                            </li>
                            <li>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(formRef);
                                }}>Оставить заявку
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.messengers}>
                        {/* WhatsApp */}
                        <a href="https://wa.me/79031363808" className={`${styles.messengerButton} ${styles.whatsapp}`}
                           target="_blank" rel="noopener noreferrer" onClick={() => trackUptolike("WhatsApp")}>
                            <FaWhatsapp className={styles.icon}/>
                            <span className={styles.managerText}>Менеджер</span>
                        </a>

                        {/* Telegram */}
                        <a href="https://t.me/+79031363808" className={`${styles.messengerButton} ${styles.telegram}`}
                           target="_blank" rel="noopener noreferrer" onClick={() => trackUptolike("Telegram")}>
                            <FaTelegramPlane className={styles.icon}/>
                            <span className={styles.managerText}>Менеджер</span>
                        </a>
                    </div>


                    <button className={`${styles.burgerMenu} ${menuOpen ? styles.opened : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

            <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                <ul>
                    <li>
                        <button onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(homeRef);
                        }}>Главная
                        </button></li>
                    <li><button onClick={(e) => { e.preventDefault(); scrollToSection(pricesRef); }}>Цены</button></li>
                    <li><button onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Услуги</button></li>
                    <li><button onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>Контакты</button></li>
                    <li><button onClick={(e) => { e.preventDefault(); scrollToSection(formRef); }}>Оставить заявку</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
