import React, {forwardRef} from "react";
import pricingStyles from "./Pricing.module.css";
import {FaCheck} from "react-icons/fa";


const pricingData = [
    {
        id: 1,
        title: "Загранпаспорт стандартного образца",
        subtitle: "2 рабочих дня",
        price: "27 000",
        oldPrice: "30 000",
        category: "Детям до 14 лет",
        features: [
            "Оформление и заполнение анкеты",
        ]
    },
    {
        id: 2,
        title: "Биометрический загранпаспорт",
        subtitle: "24 рабочих дня",
        price: "23 500",
        oldPrice: "25 000",
        category: "Для иногородних",
        features: [
            "Оформление и заполнение анкеты",
            "Консультация по необходимому пакету документов",
            "Сопровождение",
            "Отслеживание статуса готовности документа"
        ]
    },
    {
        id: 3,
        title: "Загранпаспорт стандартного образца",
        subtitle: "7 рабочих дней",
        price: "62 000",
        oldPrice: "65 000",
        category: "Взрослым от 18 лет",
        features: [
            "Оформление и заполнение анкеты",
            "Консультация по необходимому пакету документов",
            "Сопровождение",
            "Отслеживание статуса готовности документа"
        ]
    }
];

const Pricing = forwardRef((props, ref) => {
    const scrollToForm = () => {
        const formSection = document.getElementById("application-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section ref={ref} className={pricingStyles.pricingSection}>
            <h2 className={pricingStyles.title}>Спецпредложения</h2>
            <div className={pricingStyles.pricingContainer}>
                {pricingData.map((plan) => (
                    <div key={plan.id} className={pricingStyles.pricingCard}>
                        {/*<span className={pricingStyles.discountLabel}>Акция</span>*/}
                        <h3 className={pricingStyles.cardTitle}>{plan.title}</h3>
                        <h4 className={pricingStyles.description}>{plan.category}</h4>
                        <hr className={pricingStyles.separator}/>
                        <div className={pricingStyles.priceContainer}>
                            <span className={pricingStyles.oldPrice}>₽{plan.oldPrice}</span>
                            <span className={pricingStyles.price}>₽{plan.price}</span>
                        </div>
                        <div className={pricingStyles.subtitleContainer}>
                            <div className={pricingStyles.iconWrapper}>
                                <FaCheck className={pricingStyles.icon}/>
                            </div>
                            <span>{plan.subtitle}</span>
                        </div>
                        {/*<p className={pricingStyles.category}>{plan.category}</p>*/}
                        {/*<ul>*/}
                        {/*    {plan.features.map((feature, index) => (*/}
                        {/*        <li key={index}>{feature}</li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                        <button className={pricingStyles.orderButton} onClick={scrollToForm}>Заказать</button>
                    </div>
                ))}
            </div>
        </section>
    );
})

export { Pricing };