import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./ServicesModal.module.css";
import { IMaskInput } from "react-imask";

const ServicesModal = ({ isOpen, onClose, service }) => {
    const [formData, setFormData] = useState({ name: "", phone: "", consent: true });
    const [errors, setErrors] = useState({ name: "", phone: "" });

    if (!isOpen || !service) return null; // Если модальное окно закрыто или service = null, не рендерим

    const validatePhone = (phone) => phone.replace(/\D/g, "").length === 11;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (name === "name") {
            setErrors((prev) => ({
                ...prev,
                name: value.length >= 2 ? "" : "Имя должно содержать минимум 2 символа",
            }));
        }

        if (name === "phone") {
            setErrors((prev) => ({
                ...prev,
                phone: validatePhone(value) ? "" : "Введите корректный номер телефона",
            }));
        }
    };

    const isFormValid = formData.name && formData.phone && formData.consent;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Форма успешно отправлена:", formData);
    };

    return (
        <div className={styles.overlay}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={styles.modal}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>


                {/* Динамический контент карточки */}
                <div className={styles.passportBox}>
                    <div className={styles.passportHeader}>
                        <h3>{service.title}</h3>
                    </div>
                    <p>{service.description}</p>
                </div>

                {/* Форма */}
                <div className={styles.contactContainer}>
                    <div className={styles.contactForm}>
                        <div className={styles.row}>
                            {/* Имя */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="name">Имя *</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Имя *"
                                    className={styles.inputField}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                            </div>

                            {/* Телефон с маской */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="phone">Номер телефона *</label>
                                <IMaskInput
                                    id="phone"
                                    mask="+7 (000) 000-00-00"
                                    unmask={true}
                                    type="tel"
                                    name="phone"
                                    placeholder="+7 (999) 999-99-99"
                                    className={styles.inputField}
                                    value={formData.phone}
                                    onAccept={(value) => setFormData({ ...formData, phone: value })}
                                    onBlur={(e) => handleInputChange(e)}
                                    required
                                />
                                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Чекбокс */}
                    <div className={styles.contactActions}>
                        <label className={styles.checkboxLabel} htmlFor="consent">
                            <input
                                id="consent"
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleInputChange}
                                required
                            />
                            Соглашаюсь с обработкой персональных данных
                        </label>
                        {errors.consent && <span className={styles.errorText}>{errors.consent}</span>}
                    </div>

                    {/* Кнопка отправки */}
                    <button className={styles.submitButton} disabled={!isFormValid} onClick={handleSubmit}>
                        Отправить заявку
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ServicesModal;
