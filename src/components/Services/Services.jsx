// import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Services.module.css";
import {forwardRef} from "react";

const servicesData = [
    { id: 1, title: "Загранпаспорт срочно", description: "Уже более 20 лет мы занимаемся срочным оформлением загранпаспорта. Мы знаем все нюансы и подводные камни данного процесса.\n" +
            "Обращаясь к нам вы получите компетентную помощь и отличную стоимость услуг." },
    { id: 2, title: "Загранпаспорт иногородним", description: "Даже если у вас нет прописки и регистрации в Москве и Московской области , наша компания поможет ускоренно оформить и получить загранпаспорт." },
    { id: 3, title: "Загранпаспорт без военного билета", description: "Часто заявитель сталкивается с требованием предоставить документы из военкомата в процессе оформления заграничного паспорта. Мы поможем в оформлении документа без военного билета и справок из военкомата." },
    { id: 4, title: "Загранпаспорт для ребёнка", description: "Маленьким путешественникам мы поможем оформить загранпаспорт в очень быстрые сроки. 4 часа  и паспорт готов!" },
    // { id: 5, title: "Услуга 5", description: "Описание услуги 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    // { id: 6, title: "Услуга 6", description: "Описание услуги 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    // { id: 7, title: "Услуга 7", description: "Описание услуги 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    // { id: 8, title: "Услуга 8", description: "Описание услуги 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    // { id: 9, title: "Услуга 9", description: "Описание услуги 9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" },
    // { id: 10, title: "Услуга 10", description: "Описание услуги 10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aperiam" }
];

const Services = forwardRef((props, ref) => {
    // const [visibleServices, setVisibleServices] = useState(4);

    // const showMoreServices = () => {
    //     setVisibleServices(prev => Math.min(prev + 2, servicesData.length));
    // };
    //
    // const hideServices = () => {
    //     setVisibleServices(4);
    // };

    return (
        <section ref={ref} className={styles.servicesSection}>
            <h2>Наши услуги</h2>
            <p className={styles.description}>Наша компания оказывает все услуги для того, чтобы ускорить и облегчить процесс получения загранпаспорта.</p>

            {/* Десктопная версия (Сетка 2x2) */}
            <div className={styles.desktopGrid}>
                <AnimatePresence>
                    {servicesData.slice(0).map(service => (
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
                                <hr className={styles.separator}/>
                                <p>{service.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Контейнер для пагинации */}
                <div className={`servicesPagination ${styles.servicesPagination}`}></div>
            </div>

            {/*<div className={styles.buttonContainer}>*/}
            {/*    {visibleServices < servicesData.length && (*/}
            {/*        <button onClick={showMoreServices} className={styles.showMoreButton}>Показать ещё</button>*/}
            {/*    )}*/}
            {/*    {visibleServices > 4 && (*/}
            {/*        <button onClick={hideServices} className={styles.hideButton}>Скрыть</button>*/}
            {/*    )}*/}
            {/*</div>*/}
        </section>
    );
})

export { Services };
