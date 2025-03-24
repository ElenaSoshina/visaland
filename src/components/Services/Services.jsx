// import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Services.module.css";
import {forwardRef, useState} from "react";
import ServicesModal from "../ServicesModal/ServicesModal";

const servicesData = [
    { id: 1, title: "Загранпаспорт срочно",
        description: "Уже более 20 лет мы занимаемся срочным оформлением загранпаспорта. Мы знаем все нюансы и подводные камни данного процесса.\n" +
            "Обращаясь к нам вы получите компетентную помощь и отличную стоимость услуг.",
        modalDescription: `
          <p><strong>Загранпаспорт нужен срочно?</strong><br />
          Обращайтесь к нам! Мы предлагаем услугу срочного оформления загранпаспорта с рядом неоспоримых преимуществ:</p>
        
          <ul>
            <li><strong>Максимально быстрая обработка:</strong> мы сокращаем время ожидания до минимума, используя все доступные законные методы.</li>
            <li><strong>Полное сопровождение:</strong> от подготовки документов до получения паспорта – мы возьмем на себя все хлопоты.</li>
            <li><strong>Прозрачная система работы:</strong> вы будете постоянно в курсе этапов оформления.</li>
            <li><strong>Гарантия качества:</strong> мы гарантируем успешное завершение процесса оформления.</li>
            <li><strong>Индивидуальный подход:</strong> мы учитываем ваши индивидуальные обстоятельства и потребности.</li>
          </ul>
        
          <p><strong>Не теряйте время – звоните нам прямо сейчас или оставляйте заявку на сайте!</strong></p>`},
    { id: 2, title: "Загранпаспорт иногородним",
        description: "Даже если у вас нет прописки и регистрации в Москве и Московской области , наша компания поможет ускоренно оформить и получить загранпаспорт без необходимости выезда в регион прописки.",
        modalDescription: `
            <p><strong>Живете в Москве, нет прописки, регистрации и срочно нужен загранпаспорт?</strong><br />
            Не тратьте время на поездки и очереди!</p>

            <p>Мы предлагаем удобное и быстрое оформление загранпаспорта в Москве специально для иногородних. 
            Забудьте о проблемах с регистрацией и пропиской – мы поможем вам на всех этапах: 
             от подготовки документов до получения готового паспорта.</p>

            <p><strong>Наши преимущества:</strong></p>
            <ul>
                <li><strong>Экономия времени и денег:</strong> вам не нужно уезжать из Москвы несколько раз.</li>
                <li><strong>Полное сопровождение:</strong> мы возьмем на себя все хлопоты по оформлению.</li>
                <li><strong>Профессиональная консультация:</strong> наши специалисты ответят на все ваши вопросы.</li>
                <li><strong>Гарантия качества:</strong> мы работаем быстро и эффективно, соблюдая все требования законодательства.</li>
                <li><strong>Удобное местоположение:</strong> ул. Тверская, 1 минута от метро.</li>
             </ul>

              <p><strong>Не теряйте драгоценное время!</strong><br />
              Обращайтесь к нам — и мы сделаем всё, чтобы вы получили загранпаспорт в кратчайшие сроки.</p>
            
              <p><strong>Звоните сейчас и получите бесплатную консультацию!</strong></p>
`
    },
    { id: 3, title: "Загранпаспорт без военного билета",
        description: "Часто заявитель сталкивается с требованием предоставить документы из военкомата в процессе оформления заграничного паспорта. Мы поможем в оформлении документа без военного билета и справок из военкомата.",
        modalDescription: `
          <p><strong>Забудьте о бюрократии!</strong><br />
          Получите загранпаспорт быстро и легко, без лишних хлопот и нервов. Мы поможем вам оформить загранпаспорт <strong>без военного билета и справки из военкомата</strong>, соблюдая все законные требования.</p>
        
          <p><strong>Обращайтесь к нам, если:</strong></p>
          <ul>
            <li>Вы потеряли военный билет или не можете его получить;</li>
            <li>Вам сложно получить справку из военкомата по различным причинам;</li>
            <li>Вам нужно срочно оформить загранпаспорт для поездки за рубеж.</li>
          </ul>
        
          <p>Мы возьмем на себя все сложности оформления, обеспечив вам быстрое и качественное обслуживание. <strong>Экономия вашего времени и нервов – наша главная задача.</strong></p>
        
          <p><strong>Гарантируем:</strong></p>
          <ul>
            <li>Полное соответствие законодательству;</li>
            <li>Конфиденциальность и безопасность вашей информации;</li>
            <li>Индивидуальный подход к каждому клиенту;</li>
            <li>Профессиональную консультацию на всех этапах оформления.</li>
          </ul>
        
          <p><strong>Звоните прямо сейчас и получите бесплатную консультацию!</strong></p>`
    },
    { id: 4, title: "Загранпаспорт для ребёнка",
        description: "Маленьким путешественникам мы поможем оформить загранпаспорт в очень быстрые сроки. 4 часа  и паспорт готов!",
        modalDescription: `
          <p><strong>Срочно нужен загранпаспорт для вашего ребенка до 14 лет?</strong><br />
          Мы сделаем это всего за <strong>3 часа!</strong></p>
        
          <p>Забудьте о долгих очередях и бесконечной бумажной волоките. 
          Наша компания предлагает <strong>ускоренное оформление загранпаспорта</strong> для детей до 14 лет всего за 3 часа!</p>
        
          <p><strong>Мы гарантируем:</strong></p>
          <ul>
            <li><strong>Быстрое и качественное обслуживание:</strong> ваш ребенок получит загранпаспорт в кратчайшие сроки.</li>
            <li><strong>Профессиональную помощь:</strong> наши специалисты помогут вам собрать все необходимые документы и правильно заполнить заявления.</li>
            <li><strong>Полное соответствие законодательству:</strong> мы работаем в соответствии со всеми требованиями.</li>
            <li><strong>Удобное расположение:</strong> 1 минута от метро Тверская.</li>
            <li><strong>Минимальный пакет документов:</strong> мы постараемся свести количество необходимых документов к минимуму.</li>
          </ul>
        
          <p><strong>Не откладывайте поездку вашей мечты!</strong><br />
          Обращайтесь к нам — и ваш ребенок получит загранпаспорт быстро и без лишних хлопот!</p>
        
          <p><strong>Звоните прямо сейчас!</strong></p>
        `
    },

];

const Services = forwardRef((props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service); // Сохраняем данные выбранной карточки
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    };
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
                            initial={{opacity: 0, y: 20, scale: 0.9}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            exit={{opacity: 0, y: -20, scale: 0.9}}
                            transition={{duration: 0.4}}
                        >
                            <h3>{service.title}</h3>
                            <hr className={styles.separator}/>
                            <p>{service.description}</p>
                            <button className={styles.moreBtn} onClick={() => openModal(service)}>Подробнее</button>
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
                                <button className={styles.moreBtn} onClick={() => openModal(service)}>Подробнее</button>
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

            {isModalOpen && <ServicesModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />}
        </section>
    );
})

export { Services };
