import React from "react";
import styles from "./Footer.module.css";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h2 className={styles.logo}>
                    <span className={styles.highlight}>VISALAND</span>
                </h2>
                <p className={styles.description}>
                    Быстрое и удобное оформление загранпаспорта без очередей и сложностей.
                </p>

                <h3 className={styles.messengerTitle}>Наши мессенджеры</h3>
                <div className={styles.messengers}>
                    <a href="https://wa.me/your-whatsapp" className={styles.messengerButton}>
                        <FaWhatsapp className={styles.icon} /> WhatsApp
                    </a>
                    <a href="https://t.me/your-telegram" className={styles.messengerButton}>
                        <FaTelegramPlane className={styles.icon} /> Telegram
                    </a>
                </div>

                <div className={styles.legal}>
                    <p>© 2024 VISALAND — Оформление заграничных паспортов в России.</p>
                    <a href="/privacy-policy" className={styles.link}>Политика конфиденциальности</a> |
                    <a href="/public-offer" className={styles.link}>Публичная оферта</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
