import React, {useState} from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Modal.module.css";
import {FaFingerprint} from "react-icons/fa";
import passport from '../../images/icons8-герб-россии-50.png'

const Modal = ({ isOpen, onClose }) => {

    const [selectedResidence, setSelectedResidence] = useState("Москва и обл.");
    const [isDutyEnabled, setIsDutyEnabled] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("email");
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", consent: false });

    const handleResidenceClick = (residence) => {
        setSelectedResidence(residence);
    };

    const handleMethodClick = (method) => {
        setSelectedMethod(method);
    };

    const toggleDuty = () => {
        setIsDutyEnabled(!isDutyEnabled);
    };

    const handleSelectPrice = (price) => {
        setTotalPrice(price);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const isFormValid = formData.name && formData.email && formData.phone && formData.consent;

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                className={styles.modal}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24}/>
                </button>

                <h2 className={styles.title}>Заключить договор онлайн</h2>

                <div className={styles.residenceGroup}>
                    <span className={styles.label}>Регистрация по месту жительства:</span>
                    <div className={styles.toggleButtons}>
                        <button
                            className={selectedResidence === "Москва и обл." ? styles.activeToggle : styles.inactiveToggle}
                            onClick={() => handleResidenceClick("Москва и обл.")}
                        >
                            Москва и обл.
                        </button>
                        <button
                            className={selectedResidence === "Регионы РФ" ? styles.activeToggle : styles.inactiveToggle}
                            onClick={() => handleResidenceClick("Регионы РФ")}
                        >
                            Регионы РФ
                        </button>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Возраст</label>
                    <select className={styles.select}>
                        <option>Взрослее 18 лет</option>
                        <option>Дети до 14 лет</option>
                        <option>Подростки от 14 до 18 лет</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label>Включить госпошлину</label>
                    <div className={styles.switchContainer} onClick={toggleDuty}>
                        <div className={isDutyEnabled ? styles.switchActive : styles.switchInactive}></div>
                        <span className={styles.switchLabel}>
              {isDutyEnabled ? "Оплачивается самостоятельно, расскажем как." : ""}
            </span>
                    </div>
                </div>

                <div className={styles.passportContainer}>
                    <div className={styles.passportBox}>
                        <div className={styles.passportHeader}>
                            <h3>Биометрический загранпаспорт</h3>
                            <FaFingerprint className={styles.passportIcon}/>

                        </div>
                        <p>Укажите срок изготовления и стоимость.</p>
                        <ul>
                            {["22-23 раб. день", "19-20 раб. день", "15-17 раб. день", "13-14 раб. день"].map((item, index) => (
                                <li key={index} className={styles.priceItem}>
                                    {item}
                                    <button className={styles.selectButton}
                                            onClick={() => handleSelectPrice(20000)}>Выбрать
                                    </button>
                                    <span className={styles.price}>20000 ₽</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.passportBox}>
                        <div className={styles.passportHeader}>
                            <h3>Загранпаспорт старого образца</h3>
                            <img src={passport} alt="Загранпаспорт старого образца"
                                 className={styles.passportIcon}/>
                        </div>
                        <p>Укажите срок изготовления и стоимость.</p>
                        <ul>
                            {["21 раб. день", "15-17 раб. день", "8 раб. день", "7 раб. день"].map((item, index) => (
                                <li key={index} className={styles.priceItem}>
                                    {item}
                                    <button className={styles.selectButton}
                                            onClick={() => handleSelectPrice(16000)}>Выбрать
                                    </button>

                                    <span className={styles.price}>16000 ₽</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className={styles.inputGroup}>
                    <label>Способ подачи документов</label>
                    <div className={styles.buttonGroup}>
                        <button
                            className={selectedMethod === "email" ? styles.activeButton : styles.outlineButton}
                            onClick={() => handleMethodClick("email")}
                        >
                            По электронной почте
                        </button>
                        <button
                            className={selectedMethod === "office" ? styles.activeButton : styles.outlineButton}
                            onClick={() => handleMethodClick("office")}
                        >
                            Офис
                        </button>
                    </div>
                </div>

                {selectedMethod === "email" && (
                    <p className={styles.methodDescription}>Вы получите инструкции по подаче документов на вашу
                        электронную почту.</p>
                )}

                {selectedMethod === "office" && (
                    <p className={styles.methodDescription}>Вы можете подать документы в нашем офисе по предварительной
                        записи.</p>
                )}
                <div className={styles.contactContainer}>
                    <div className={styles.firstContactContainer}>
                        <div className={styles.contactForm}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя *"
                                className={styles.inputField}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Электронная почта *"
                                className={styles.inputField}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Номер телефона *"
                                className={styles.inputField}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
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

                    <div className={styles.costCalculation}>
                        <h3>Загранпаспорт:</h3>
                        <p>Взрослые от 18 лет</p>
                        <p>{selectedResidence}</p>
                        <p>Укажите срок изготовления и стоимость.</p>
                        <hr/>
                        <p className={styles.totalPrice}>{totalPrice} ₽</p>
                        <p>с учетом госпошлины</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
