import React, { useState } from "react";
import InputMask from "react-input-mask"; // Импорт маски ввода
import styles from "../Modal.module.css";

const ContactForm = ({
                         selectedPassportType,
                         selectedDuration,
                         selectedAge,
                         selectedResidence,
                         totalPrice,
                         isDutyEnabled
                     }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        consent: true,
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });

    // Валидация email
    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    // Валидация номера телефона
    const validatePhone = (phone) => {
        return phone.replace(/\D/g, "").length === 11;
    };

    // Обработчик изменений в инпутах
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Проверка валидности
        if (name === "name") {
            setErrors((prev) => ({
                ...prev,
                name: value.length >= 2 ? "" : "Имя должно содержать минимум 2 символа",
            }));
        }

        if (name === "email") {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value) ? "" : "Введите корректный email",
            }));
        }

        if (name === "phone") {
            setErrors((prev) => ({
                ...prev,
                phone: validatePhone(value) ? "" : "Введите корректный номер телефона",
            }));
        }
    };

    const isFormValid =
        formData.name.length >= 2 &&
        validateEmail(formData.email) &&
        validatePhone(formData.phone) &&
        formData.consent;

    return (
        <div className={styles.contactContainer}>
            <div className={styles.firstContactContainer}>
                <div className={styles.contactForm}>
                    {/* Поле Имя */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя *"
                        className={styles.inputField}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}

                    {/* Поле Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Электронная почта *"
                        className={styles.inputField}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}

                    {/* Поле Телефон с маской */}
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        maskChar="_"
                        type="tel"
                        name="phone"
                        placeholder="Номер телефона *"
                        className={styles.inputField}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.contactActions}>
                    <button className={styles.submitButton} disabled={!isFormValid}>
                        Отправить заявку
                    </button>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            required
                        />
                        Соглашаюсь с обработкой персональных данных
                    </label>
                </div>
            </div>

            {/* Итоговый расчет стоимости */}
            <div className={styles.costCalculation}>
                <h3>Загранпаспорт:</h3>
                <p><strong>Тип паспорта:</strong> {selectedPassportType || "Не выбран"}</p>
                <p><strong>Срок выполнения:</strong> {selectedDuration || "Не выбран"}</p>
                <p><strong>Возраст:</strong> {selectedAge || "Не указан"}</p>
                <p><strong>Регистрация:</strong> {selectedResidence || "Не выбрана"}</p>
                <hr />
                <p className={styles.totalPrice}>{totalPrice} ₽</p>
                <p>{isDutyEnabled ? "с учетом госпошлины" : "без учета госпошлины"}</p>
            </div>
        </div>
    );
};

export default ContactForm;
