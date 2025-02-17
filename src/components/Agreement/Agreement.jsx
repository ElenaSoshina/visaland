import React, { useState } from "react";
import styles from "./Agreement.module.css";
import vacationImage from "../../images/vacation.png";
import Modal from "../Modal/Modal"; // Импортируем модальное окно

const Agreement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const scrollToForm = () => {
        const formSection = document.getElementById("application-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className={styles.agreementSection}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Срочно нужен загранпаспорт?</h2>
                    <p className={styles.description}>
                        Если у вас возникла потребность в оформлении загранпаспорта срочно,
                        обратитесь за помощью к профессионалам, специалистам сервиса
                        VISALAND – мы знаем все о процедуре оформления загранпаспорта:
                        где и как быстро подать документы, как избежать отказа и задержки в
                        выдаче документа, как правильно подготовить заявление.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className={styles.primaryButton} onClick={openModal}>
                            Заключить договор онлайн
                        </button>
                        <button className={styles.secondaryButton} onClick={scrollToForm}>Позвоните мне!</button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={vacationImage} alt="Нужен загранпаспорт срочно?" className={styles.image} />
                </div>
            </section>

            {/* Модальное окно */}
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
};

export default Agreement;
