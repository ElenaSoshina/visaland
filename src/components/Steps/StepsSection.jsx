import React from "react";
import stepsStyles from "./StepsSection.module.css";
import { ReactComponent as DocumentCheckIcon } from "../../images/issue_doc.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const stepsData = [
    { id: 1, title: "Запрос", description: "Беседа с клиентом, подробная информация по его запросу, предложение вариантов." },
    { id: 2, title: "Создание анкеты", description: "Создание и оформление анкеты, отправка клиенту уже заполненный файл в формате PDF." },
    { id: 3, title: "Сопровождение", description: "Удаленное сопровождение клиента во время подачи документов в паспортном столе." },
    { id: 4, title: "Выдача документов", description: "Уведомление клиента о готовности к выдаче его документа.", isHighlighted: true }
];

function StepsSection() {
    return (
        <section className={stepsStyles.stepsSection}>
            <h2>
                <span className={stepsStyles.bold}>Этапы оформления документов</span>
            </h2>

            <div className={stepsStyles.mobileSwiper}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    pagination={{clickable: true}}
                    modules={[Pagination]}
                    breakpoints={{
                        768: {slidesPerView: 3, spaceBetween: 20}
                    }}
                >
                    {stepsData.map((step) => (
                        <SwiperSlide key={step.id}>
                            <div
                                className={`${stepsStyles.stepCard} ${step.isHighlighted ? stepsStyles.highlighted : ""}`}>
                                <span className={stepsStyles.stepNumber}>{step.id < 10 ? `0${step.id}` : step.id}</span>
                                <h3>{step.title}</h3>
                                <p className={stepsStyles.stepDescription}>{step.description}</p>
                                {step.isHighlighted && <DocumentCheckIcon className={stepsStyles.icon}/>}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <div className={stepsStyles.desktopContainer}>
                {stepsData.map((step) => (
                    <div key={step.id}
                         className={`${stepsStyles.stepCard} ${step.isHighlighted ? stepsStyles.highlighted : ""}`}>
                        <span className={stepsStyles.stepNumber}>{step.id < 10 ? `0${step.id}` : step.id}</span>
                        <h3>{step.title}</h3>
                        <p className={stepsStyles.stepDescription}>{step.description}</p>
                        {step.isHighlighted && <DocumentCheckIcon className={stepsStyles.icon}/>}
                    </div>
                ))}
        </div>
</section>
)
    ;
}

export {StepsSection};