import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./FAQ.module.css";

const faqData = [
    { question: "Как долго хранится загранпаспорт в паспортном столе, могу ли забрать позже?", answer: "Да, можете. В течение 3 месяцев у Вас есть возможность забрать загранпаспорт там же, где оформляли, по истечению этого срока — документ отправляется в архив на хранение." },
    { question: "Могу ли я оплатить госпошлину через госуслуги, чтобы сэкономить?", answer: "К сожалению, нет. При подаче документов через нас, госпошлина оплачивается только через терминал МФЦ (как правило, в день оформления), а соответственно стоимость будет полная, без скидок." },
    { question: "Может ли кто-то вместо меня забрать готовый загранпаспорт, по доверенности?", answer: "Нет, не может. Регламентом российского законодательства это не предусмотрено. Данное обстоятельство возможно лишь в одном случае — если суд признает Вас недееспособным лицом и назначит опекуна. Опекун имеет право получать и оформлять за Вас документы." },
    { question: "Могу ли я иметь два загранпаспорта?", answer: "Да. По закону Вы имеете право иметь одновременно 2 загранпаспорта. Второй — оформляется в дополнение к первому, это будет биометрический загранпаспорт, сроком на 10 лет.\n" +
            "Если необходим загранпаспорт старого образца сроком на 5 лет, то для его изготовления нужно будет аннулировать Ваш первый действующий загранпаспорт-во время подачи документов." }
];

function FAQ() {
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqHeader}>
                <h2 className={styles.faqTitle}>Часто <span className={styles.bold}>задаваемые</span> вопросы</h2>
            </div>

            {/* Десктопная версия (Сетка 2x2) */}
            <div className={styles.desktopGrid}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.faqContent}>
                            <h3 className={styles.faqQuestion}>{item.question}</h3>
                            <hr className={styles.separator}/>
                        </div>
                        <p className={styles.faqAnswer}>{item.answer}</p>
                    </div>
                ))}
            </div>

            {/* Мобильная версия (Слайдер) */}
            <div className={styles.mobileSlider}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{el: ".faqPagination", clickable: true}}
                    className={styles.faqSwiper}
                >
                    {faqData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.faqItem}>
                                <div className={styles.faqContent}>
                                    <h3 className={styles.faqQuestion}>{item.question}</h3>
                                    <hr className={styles.separator}/>
                                </div>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`faqPagination ${styles.faqPagination}`}></div>
            </div>

        </section>
    );
}

export default FAQ;
