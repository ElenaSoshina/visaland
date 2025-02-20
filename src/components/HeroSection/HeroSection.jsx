import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
    const scrollToForm = () => {
        const formSection = document.getElementById("application-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Срочное оформление загранпаспорта в Москве</h1>
                    <p>Получите заграничный паспорт быстро,<br /> легально и без проблем <br />с помощью нашей компании</p>
                </div>
                <div className={styles.infoBlocks}>
                    <button onClick={scrollToForm} className={styles.primaryButton}>Оформить сейчас</button>
                    <div className={styles.infoBlocks_row}>
                        <div className={styles.infoBlock}>
                            <h3>Полностью официальный метод оформления.</h3>
                            <p>Мы используем законные методы оформления. Сдача и получение происходят в МВД!</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>Получи готовый загранпаспорт через пять дней</h3>
                            <p>Закажи срочный загранпаспорт сегодня и получи его через 5 дней!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
