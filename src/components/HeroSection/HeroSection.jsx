import React, {forwardRef, useState} from 'react';
import styles from './HeroSection.module.css';
import Modal from "../Modal/Modal";

const HeroSection = forwardRef((props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // const scrollToForm = () => {
    //     const formSection = document.getElementById("application-form");
    //     if (formSection) {
    //         formSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <section ref={ref} className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Срочное оформление <span className={styles.bgHighlight}>загранпаспорта</span> в Москве</h1>

                    <p>Получите заграничный паспорт быстро,<br/> легально и без проблем <br/>с помощью нашей компании</p>
                </div>
                <div className={styles.infoBlocks}>
                    <button onClick={openModal} className={styles.primaryButton}>Оформить сейчас</button>
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
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </section>
    );
});

export default HeroSection;
