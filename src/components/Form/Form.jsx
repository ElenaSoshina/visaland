import React, {forwardRef} from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

const Form = forwardRef((props, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Форма отправлена:", data);
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
                                value: /^[+]?[0-9]{10,15}$/,
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
        </section>
    );
})

export default Form;
