import React, { forwardRef, useEffect, useRef } from "react";
import styles from "./About.module.css";

const About = forwardRef((props, ref) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section ref={ref} id="about" className={styles.about_area}>
            <div className={styles.about_wrapper}>

                {/* ✅ Блок "Как нас найти" */}
                <div className={styles.map_section}>
                    <h3 className={styles.section_title}>Как нас найти</h3>

                    {/* ✅ Контактная информация */}
                    <div className={styles.contact_info}>
                        <p><strong>📍 Адрес:</strong> Москва, Тверская ул., 20, офис 1</p>
                        <p><strong>📞 Телефон:</strong> <a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
                        <p><strong>✉️ Email:</strong> <a href="mailto:info@visaland.ru">info@visaland.ru</a></p>
                    </div>

                    {/* ✅ Карта */}
                    <div className={styles.map_container}>
                        <iframe
                            // src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee0b096fe0e11ae88bb0e3110109b955e1fd47ce82867962d81885d5a9a5edbe&ll=37.602373,55.766664&z=17"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee0b096fe0e11ae88bb0e3110109b955e1fd47ce82867962d81885d5a9a5edbe&amp;source=constructor"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            allowFullScreen
                            title="Офис VisaLand"
                            style={{borderRadius: "10px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"}}
                        ></iframe>

                    </div>
                </div>

                {/* ✅ Блок с отзывами (уменьшенная высота) */}
                <div className={styles.reviews_container}>
                    <h3 className={styles.title}>Отзывы клиентов</h3>
                    <p className={styles.description}>
                        Наши клиенты довольны сервисом и рекомендуют нас!
                    </p>

                    <div className={styles.reviews_widget}>
                        <iframe
                            style={{
                                width: "100%",
                                height: "520px", /* Ограниченная высота */
                                border: "1px solid #e6e6e6",
                                borderRadius: "8px",
                                boxSizing: "border-box"
                            }}
                            src="https://yandex.ru/maps-reviews-widget/1080088379?comments"
                            title="Отзывы Яндекс.Карты"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
});

export default About;
