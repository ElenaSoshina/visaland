import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection(props) {
    const scrollToForm = () => {
        const formSection = document.getElementById("application-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Быстрое и надежное оформление загранпаспорта</h1>
                <p>Оформите загранпаспорт без очередей и лишних хлопот с нашей помощью.</p>
                <div className={styles.buttons}>
                    <button onClick={scrollToForm} className={styles.primaryButton}>Оформить сейчас</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;