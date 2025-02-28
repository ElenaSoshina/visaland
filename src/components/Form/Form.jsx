import React, { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { sendMessageToTelegram } from "../utils/telegramAPI";
import { motion } from "framer-motion";

const Form = forwardRef((props, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onSubmit = async (data) => {
        console.log("Форма отправлена:", data);

        const messageData = {
            name: data.name,
            phone: data.phone,
            comment: data.comment || "Без комментария",
        };

        const success = await sendMessageToTelegram(messageData);

        if (success) {
            setIsPopupOpen(true);
            reset(); // Очистка формы после успешной отправки
        } else {
            alert("Ошибка при отправке данных. Попробуйте еще раз.");
        }
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <section ref={ref} id="application-form" className={styles.formSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Оформите загранпаспорт без очередей и лишних хлопот
                </h2>
                <p className={styles.subtitle}>
                    Заполните форму, и наш специалист свяжется с вами.
                </p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {/* Поле Имя */}
                    <input
                        type="text"
                        placeholder="Введите ваше имя"
                        className={styles.input}
                        {...register("name", { required: "Введите ваше имя" })}
                    />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}

                    {/* Поле Телефон */}
                    <input
                        type="tel"
                        placeholder="Введите ваш телефон"
                        className={styles.input}
                        {...register("phone", {
                            required: "Введите ваш телефон",
                            pattern: {
                                value: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
                                message: "Введите корректный номер телефона"
                            }
                        })}
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

                    {/* Поле Комментарий */}
                    <textarea
                        placeholder="Введите ваш комментарий (необязательно)"
                        className={styles.textarea}
                        {...register("comment")}
                    />

                    {/* Кнопка отправки */}
                    <button type="submit" className={styles.button}>
                        📞 Заказать консультацию
                    </button>
                </form>
            </div>

            {/* Popup */}
            {isPopupOpen && (
                <div className={styles.popupOverlay}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={styles.popup}
                    >
                        <h3>Заявка отправлена!</h3>
                        <p>С Вами свяжутся в ближайшее время.</p>
                        <button className={styles.popupButton} onClick={handlePopupClose}>
                            ОК
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
});

export default Form;
