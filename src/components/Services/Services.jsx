import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Services.module.css";

const servicesData = [
    { id: 1, title: "Загранпаспорт срочно", description: "Описание услуги 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 2, title: "Справки об отсутствии судимости", description: "Описание услуги 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 3, title: "Загранпаспорт для ребенка", description: "Описание услуги 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 4, title: "Гражданский паспорт", description: "Описание услуги 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 5, title: "Услуга 5", description: "Описание услуги 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 6, title: "Услуга 6", description: "Описание услуги 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 7, title: "Услуга 7", description: "Описание услуги 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 8, title: "Услуга 8", description: "Описание услуги 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 9, title: "Услуга 9", description: "Описание услуги 9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    { id: 10, title: "Услуга 10", description: "Описание услуги 10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" }
];

function Services() {
    const [visibleServices, setVisibleServices] = useState(4);

    const showMoreServices = () => {
        setVisibleServices(prev => Math.min(prev + 2, servicesData.length));
    };

    const hideServices = () => {
        setVisibleServices(4);
    };

    return (
        <section className={styles.servicesSection}>
            <h2>Наши услуги</h2>
            <p className={styles.description}>Наш визовый центр оказывает все услуги для того, чтобы ускорить и облегчить процесс получения загранпаспорта.</p>

            {/* Десктопная версия (Сетка 2x2) */}
            <div className={styles.desktopGrid}>
                <AnimatePresence>
                    {servicesData.slice(0, visibleServices).map(service => (
                        <motion.div
                            key={service.id}
                            className={styles.serviceCard}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3>{service.title}</h3>
                            <hr className={styles.separator}/>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Мобильная версия (Слайдер) */}
            <div className={styles.mobileSlider}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ el: ".servicesPagination", clickable: true }} // Указываем кастомный контейнер для пагинации
                >
                    {servicesData.map(service => (
                        <SwiperSlide key={service.id}>
                            <div className={styles.serviceCard}>
                                <h3>{service.title}</h3>
                                <hr/>
                                <p>{service.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Контейнер для пагинации */}
                <div className={`servicesPagination ${styles.servicesPagination}`}></div>
            </div>

            <div className={styles.buttonContainer}>
                {visibleServices < servicesData.length && (
                    <button onClick={showMoreServices} className={styles.showMoreButton}>Показать ещё</button>
                )}
                {visibleServices > 4 && (
                    <button onClick={hideServices} className={styles.hideButton}>Скрыть</button>
                )}
            </div>
        </section>
    );
}

export { Services };
