import React from "react";
import pricingStyles from "./Pricing.module.css";
import {FaCheck} from "react-icons/fa";


const pricingData = [
    {
        id: 1,
        title: "ЗАГРАНПАСПОРТ",
        subtitle: "12-15 рабочих дней",
        price: "15 000",
        oldPrice: "20 000",
        category: "Взрослый",
        features: [
            "Оформление и заполнение анкеты",
            "Консультация по необходимому пакету документов",
            "Сопровождение",
            "Отслеживание статуса готовности документа"
        ]
    },
    {
        id: 2,
        title: "ЗАГРАНПАСПОРТ",
        subtitle: "10-12 рабочих дней",
        price: "17 500",
        oldPrice: "22 000",
        category: "Взрослый",
        features: [
            "Оформление и заполнение анкеты",
            "Консультация по необходимому пакету документов",
            "Сопровождение",
            "Отслеживание статуса готовности документа"
        ]
    },
    {
        id: 3,
        title: "ЗАГРАНПАСПОРТ",
        subtitle: "5-8 рабочих дней",
        price: "13 000",
        oldPrice: "15 000",
        category: "Детский",
        features: [
            "Оформление и заполнение анкеты",
            "Консультация по необходимому пакету документов",
            "Сопровождение",
            "Отслеживание статуса готовности документа"
        ]
    }
];

function Pricing() {
    return (
        <section className={pricingStyles.pricingSection}>
            <h2 className={pricingStyles.title}>Спецпредложения</h2>
            <div className={pricingStyles.pricingContainer}>
                {pricingData.map((plan) => (
                    <div key={plan.id} className={pricingStyles.pricingCard}>
                        {/*<span className={pricingStyles.discountLabel}>Акция</span>*/}
                        <h3>{plan.title}</h3>
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
                        <button className={pricingStyles.orderButton}>Заказать</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Pricing };