import React from "react";
import CountUp from "react-countup";
import styles from "./About.module.css";
import aboutImage from "../../images/about.jpg";

const About = () => {

    const scrollToForm = () => {
        const formSection = document.getElementById("application-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section id="about" className={styles.about_area}>
            <div className={styles.about_wrapper}>
                <div className={styles.about_image_container}>
                    <img src={aboutImage} alt="Команда VisaLand" className={styles.about_image}/>
                </div>
                <div className={styles.about_content_wrapper}>
                    <h3 className={styles.title}>
                        О нас <br/> VisaLand в <span className={styles.highlight}>Цифрах</span>
                    </h3>
                    <p className={styles.description}>
                        VisaLand – ваш надежный партнер в оформлении загранпаспортов. Мы предлагаем полный спектр
                        услуг, от консультаций и подготовки документов до оперативной подачи и получения готового
                        паспорта. Доверьте оформление профессионалам и избавьтесь от хлопот!
                    </p>
                    <button onClick={scrollToForm} className={styles.call_button}>
                        Позвонить мне
                    </button>
                    <div className={styles.about_counter}>
                        <div className={styles.counter_grid}>
                            <div className={`${styles.counter_row} ${styles.first_row}`}>
                                <div className={`${styles.single_counter} ${styles.counter_top_left}`}>
                                    <div className={styles.counter_wrapper}>
                                        <span className={styles.count}>
                                            <CountUp start={1} end={534} duration={3}/>
                                        </span>
                                        <p>Клиентов обслужено</p>
                                    </div>
                                </div>
                                <div className={`${styles.single_counter} ${styles.counter_top_right}`}>
                                    <div className={styles.counter_wrapper}>
                                        <span className={styles.count}>
                                            <CountUp start={1} end={95} duration={3}/>
                                        </span>
                                        <p>Документов ежедневно</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.counter_row} ${styles.second_row}`}>
                                <div className={`${styles.single_counter} ${styles.counter_bottom_left}`}>
                                    <div className={styles.counter_wrapper}>
                                    <span className={styles.count}>
                                        <CountUp start={1} end={12} duration={3}/>
                                    </span>
                                        <p>Лет на рынке</p>
                                    </div>
                                </div>
                                <div className={`${styles.single_counter} ${styles.counter_bottom_right}`}>
                                    <div className={styles.counter_wrapper}>
                                    <span className={styles.count}>
                                        <CountUp start={1} end={10} duration={3}/>
                                    </span>
                                        <p>Квалифицированных специалистов</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
