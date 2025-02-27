import React, {useState} from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Modal.module.css";
import {FaFingerprint} from "react-icons/fa";
import passport from '../../images/icons8-герб-россии-50.png'
import {IMaskInput} from "react-imask";
import {sendMessageToTelegram} from "../utils/telegramAPI";

const Modal = ({ isOpen, onClose }) => {

    const [selectedResidence, setSelectedResidence] = useState("Москва и обл.");
    const [selectedAge, setSelectedAge] = useState("Взрослые 18 лет");
    // const [isDutyEnabled, setIsDutyEnabled] = useState(false);
    const [selectedBioIndex, setSelectedBioIndex] = useState(null); // Выбранная кнопка в секции Биометрический паспорт
    const [selectedOldIndex, setSelectedOldIndex] = useState(null)
    const [selectedPassportType, setSelectedPassportType] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("");
    // const [selectedMethod, setSelectedMethod] = useState("email");
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", consent: true });
    const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePhone = (phone) => phone.replace(/\D/g, "").length === 11;

    const bioPricesAdult = [
        { label: "5 раб. день", price: 86000 },
        { label: "6 раб. день", price: 72000 },
        { label: "7 раб. день", price: 68000 },
        { label: "8 раб. день", price: 61000 },
        { label: "12 раб. день", price: 37000 },
        { label: "13 раб. день", price: 28000 },
        { label: "17 раб. день", price: 24000 },
        { label: "24 раб. день", price: 23000 },
    ];

    const oldPricesAdult = [
        { label: "5 раб. день", price: 75000 },
        { label: "6 раб. день", price: 68000 },
        { label: "7 раб. день", price: 62000 },
        { label: "8 раб. день", price: 54000 },
        { label: "17 раб. день", price: 25500 },
        { label: "24 раб. день", price: 22000 },
    ];

    const bioPricesChild = [
        { label: "2 раб. день", price: 50000 },
        { label: "5 раб. день", price: 23000 },
        { label: "7 раб. день", price: 21000 },
        { label: "12 раб. день", price: 19000 },
    ];

    const oldPricesChild = [
        { label: "1 раб. день", price: 30000 },
        { label: "2 раб. день", price: 26000 },
        { label: "3 раб. день", price: 23000 },
        { label: "5 раб. день", price: 21000 },
        { label: "12 раб. день", price: 18000 },
    ];

    // Функция для получения нужного массива цен в зависимости от возраста
    const getBioPrices = () => (selectedAge === "Дети до 14 лет" ? bioPricesChild : bioPricesAdult);
    const getOldPrices = () => (selectedAge === "Дети до 14 лет" ? oldPricesChild : oldPricesAdult);

    const handleResidenceClick = (residence) => {
        setSelectedResidence(residence);
    };

    // Изменение возраста
    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
        setSelectedBioIndex(null);
        setSelectedOldIndex(null);
        setTotalPrice(0);
        setSelectedPassportType("");
        setSelectedDuration("");
    };

    const handleSelectPrice = (basePrice, index, type, duration) => {
        let updatedPrice = basePrice;

        // // Увеличиваем цену, если госпошлина включена
        // if (isDutyEnabled) {
        //     updatedPrice += type === "bio" ? 6000 : 2000;
        // }

        if (type === "bio") {
            setSelectedBioIndex(index);
            setSelectedOldIndex(null);// Сбрасываем выбор в другой секции
            setSelectedPassportType('Биометрический загранпаспорт');
        } else {
            setSelectedOldIndex(index);
            setSelectedBioIndex(null); // Сбрасываем выбор в другой секции
            setSelectedPassportType('Загранпаспорт старого образца');
        }
        setSelectedDuration(duration);
        setTotalPrice(updatedPrice);
    };

    // const handleMethodClick = (method) => {
    //     setSelectedMethod(method);
    // };

    // // Переключение госпошлины
    // const toggleDuty = () => {
    //     setIsDutyEnabled((prev) => {
    //         const newDutyState = !prev;
    //         let newTotalPrice = totalPrice;
    //
    //         if (selectedBioIndex !== null) {
    //             const basePrice = bioPrices[selectedBioIndex].price;
    //             newTotalPrice = newDutyState ? basePrice + 6000 : basePrice;
    //         } else if (selectedOldIndex !== null) {
    //             const basePrice = oldPrices[selectedOldIndex].price;
    //             newTotalPrice = newDutyState ? basePrice + 2000 : basePrice;
    //         }
    //
    //         setTotalPrice(newTotalPrice);
    //         return newDutyState;
    //     });
    // };


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

        if (name === "consent") {
            setErrors((prev) => ({
                ...prev,
                consent: checked ? "" : "Вы должны согласиться с обработкой данных",
            }));
        }
    };

    const isFormValid =
        formData.name &&
        // formData.email &&
        formData.phone &&
        formData.consent &&
        selectedPassportType !== ""; // Услуга должна быть выбрана

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedPassportType || !selectedDuration) {
            setErrors((prev) => ({
                ...prev,
                passportType: "Выберите тип паспорта и срок изготовления",
            }));
            return;
        }

        setErrors((prev) => ({ ...prev, passportType: "" }));

        const formDataToSend = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            passportType: selectedPassportType,
            duration: selectedDuration,
            residence: selectedResidence,
            totalPrice: totalPrice,
        };

        const success = await sendMessageToTelegram(formDataToSend);

        if (success) {
            alert("Заявка успешно отправлена!");
            setFormData({ name: "", phone: "", email: "", consent: true });
            setTotalPrice(0);
        } else {
            alert("Ошибка при отправке заявки.");
        }
    };

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
                            className={`${styles.toggleButton} ${selectedResidence === "Москва и обл." ? styles.activeToggle : styles.inactiveToggle}`}
                            onClick={() => handleResidenceClick("Москва и обл.")}
                        >
                            Москва и обл.
                        </button>
                        <button
                            className={`${styles.toggleButton} ${selectedResidence === "Регионы РФ" ? styles.activeToggle : styles.inactiveToggle}`}
                            onClick={() => handleResidenceClick("Регионы РФ")}
                        >
                            Регионы РФ
                        </button>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="age">Возраст</label>
                    <div className={styles.selectWrapper}>
                        <select id="age" value={selectedAge} className={styles.select} onChange={handleAgeChange}>
                            <option>Взрослые и подростки от 14 лет</option>
                            <option>Дети до 14 лет</option>
                        </select>
                    </div>
                </div>

        {/*        /!* Блок с переключателем госпошлины *!/*/}
        {/*        <div className={styles.inputGroup}>*/}
        {/*            <label>Включить госпошлину</label>*/}
        {/*            <div className={styles.switchContainer}>*/}
        {/*                <div className={isDutyEnabled ? styles.switchActive : styles.switchInactive}></div>*/}
        {/*                <span className={styles.switchLabel}>*/}
        {/*    {isDutyEnabled ? "Оплачивается самостоятельно, расскажем как." : ""}*/}
        {/*</span>*/}
        {/*            </div>*/}
        {/*        </div>*/}

                <div className={styles.passportContainer}>
                    {/* Секция Биометрический загранпаспорт */}
                    <div className={styles.passportBox}>
                        <div className={styles.passportHeader}>
                            <h3>Биометрический загранпаспорт</h3>
                            <FaFingerprint className={styles.passportIcon}/>
                        </div>
                        <p>Укажите срок изготовления и стоимость.</p>
                        <ul>
                            {getBioPrices().map((item, index) => {
                                // const finalPrice = isDutyEnabled ? item.price + 6000 : item.price;
                                return (
                                    <li key={index} className={styles.priceItem}>
                                        <span className={styles.priceLabel}>{item.label}</span>
                                        <span className={styles.price}>{item.price} ₽</span>
                                        <button
                                            className={`${styles.selectButton} ${selectedBioIndex === index ? styles.selected : ""}`}
                                            onClick={() => handleSelectPrice(item.price, index, "bio", item.label)}
                                        >
                                            Выбрать
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Секция Загранпаспорт старого образца */}
                    <div className={styles.passportBox}>
                        <div className={styles.passportHeader}>
                            <h3>Загранпаспорт старого образца</h3>
                            <img src={passport} alt="Загранпаспорт старого образца" className={styles.passportIcon}/>
                        </div>
                        <p>Укажите срок изготовления и стоимость.</p>
                        <ul>
                            {getOldPrices().map((item, index) => {
                                // const finalPrice = isDutyEnabled ? item.price + 2000 : item.price;
                                return (
                                    <li key={index} className={styles.priceItem}>
                                        <span className={styles.priceLabel}>{item.label}</span>
                                        <span className={styles.price}>{item.price} ₽</span>
                                        <button
                                            className={`${styles.selectButton} ${selectedOldIndex === index ? styles.selected : ""}`}
                                            onClick={() => handleSelectPrice(item.price, index, "old", item.label)}
                                        >
                                            Выбрать
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>


                {/*<div className={styles.inputGroup}>*/}
                {/*    <label>Способ подачи документов</label>*/}
                {/*    <div className={styles.buttonGroup}>*/}
                {/*        <button*/}
                {/*            className={`${styles.methodButton} ${selectedMethod === "email" ? styles.activeButton : styles.outlineButton}`}*/}
                {/*            onClick={() => handleMethodClick("email")}*/}
                {/*        >*/}
                {/*            По электронной почте*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            className={`${styles.methodButton} ${selectedMethod === "office" ? styles.activeButton : styles.outlineButton}`}*/}
                {/*            onClick={() => handleMethodClick("office")}*/}
                {/*        >*/}
                {/*            Офис*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*{selectedMethod === "email" && (*/}
                {/*    <p className={styles.methodDescription}>Вы получите инструкции по подаче документов на вашу*/}
                {/*        электронную почту.</p>*/}
                {/*)}*/}

                {/*{selectedMethod === "office" && (*/}
                {/*    <p className={styles.methodDescription}>Вы можете подать документы в нашем офисе по предварительной*/}
                {/*        записи.</p>*/}
                {/*)}*/}
                <div className={styles.contactContainer}>
                    <div className={styles.firstContactContainer}>
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
                                        onAccept={(value) => setFormData({...formData, phone: value})}
                                        onBlur={(e) => handleInputChange(e)} // Добавили onBlur для обновления
                                        required
                                    />
                                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                                </div>
                            </div>

                            {/*/!* Email с маской *!/*/}
                            {/*<div className={styles.inputWrapper}>*/}
                            {/*    <label htmlFor="email">Электронная почта *</label>*/}
                            {/*    <input*/}
                            {/*        id="email"*/}
                            {/*        type="email"*/}
                            {/*        name="email"*/}
                            {/*        placeholder="example@mail.com"*/}
                            {/*        className={styles.inputField}*/}
                            {/*        value={formData.email}*/}
                            {/*        onChange={handleInputChange}*/}
                            {/*        onBlur={handleInputChange} // Валидация при выходе из поля*/}
                            {/*        required*/}
                            {/*    />*/}
                            {/*    {errors.email && <span className={styles.errorText}>{errors.email}</span>}*/}
                            {/*</div>*/}


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

                        {!selectedPassportType && !selectedDuration && (
                            <span className={styles.infoText}>Выберите тип паспорта и срок изготовления</span>
                        )}

                    </div>
                    <div className={styles.costCalculation}>
                        <h3>Загранпаспорт:</h3>
                        <p><strong>Тип паспорта:</strong> {selectedPassportType || "Не выбран"}</p>
                        <p><strong>Срок выполнения:</strong> {selectedDuration || "Не выбран"}</p>
                        <p><strong>Возраст:</strong> {selectedAge || "Не указан"}</p>
                        <p><strong>Регистрация:</strong> {selectedResidence || "Не выбрана"}</p>
                        <hr/>
                        <p className={styles.totalPrice}>{totalPrice} ₽</p>
                        {/*<p>{isDutyEnabled ? "с учетом госпошлины" : "без учета госпошлины"}</p>*/}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
