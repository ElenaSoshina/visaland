import React from "react";
import styles from "./Footer.module.css";
import {FaWhatsapp, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegClock} from "react-icons/fa";

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

                <div className={styles.infoBlocks}>
                    <div className={styles.infoBlock}>
                        <FaMapMarkerAlt className={styles.icon}/>
                        <p>г. Москва, ул. Тверская, д. 20, стр. 1, 4 этаж, офис 401</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <FaPhoneAlt className={styles.icon}/>
                        <p>Тел.: <a href="tel:+74952254266">+7 (495) 225-42-66</a></p>
                        <p>Email: <a href="mailto:visaland@mail.ru">visaland@mail.ru</a></p>
                    </div>

                    <div className={styles.infoBlock}>
                        <FaRegClock className={styles.icon}/>
                        <p>Пн-Пт: 10:00 – 18:00</p>
                        <p>Сб-Вс: Выходной</p>
                    </div>
                </div>

                <h3 className={styles.messengerTitle}>Наши мессенджеры</h3>
                <div className={styles.messengers}>
                    <a href="https://wa.me/79017356401" className={styles.messengerButton}>
                        <FaWhatsapp className={styles.icon}/> WhatsApp
                    </a>
                    <a href="https://t.me/+79017356401" className={styles.messengerButton}>
                        <FaTelegramPlane className={styles.icon}/> Telegram
                    </a>
                </div>

                <div className={styles.legal}>
                    <p className={styles.legalText}>© VISALAND — Оформление заграничных паспортов в России.</p>
                    <a href="/privacy-policy" className={styles.link}>Политика конфиденциальности</a> |
                    <a href="/public-offer" className={styles.link}>Публичная оферта</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
