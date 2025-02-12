import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection(props) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Быстрое и надежное оформление загранпаспорта</h1>
                <p>Оформите загранпаспорт без очередей и лишних хлопот с нашей помощью.</p>
                <div className={styles.buttons}>
                    <a href="#application-form" className={styles.primaryButton}>Оформить сейчас</a>
                    <a href="#learn-more" className={styles.secondaryButton}>Подробнее</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;