// utils/messengerUtils.js

export const sendMessageToMessenger = async ({ name, phone, passportType, duration, age, residence, totalPrice }) => {
    if (!name || !phone || !passportType || !duration) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }

    // Формируем текст сообщения
    const message = `
🚀 *Новая заявка на загранпаспорт* 🚀

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📄 *Тип паспорта:* ${passportType || "Не выбран"}
⏳ *Срок выполнения:* ${duration || "Не выбран"}
🎂 *Возраст:* ${age}
📍 *Регион:* ${residence}

💰 *Итоговая стоимость:* ${totalPrice} ₽
    `;

    // === ОТПРАВКА В TELEGRAM ===
    try {
        const telegramBotToken = "your_bot_token"; // 🔥 Укажите ваш токен бота
        const telegramChatId = "your_chat_id"; // 🔥 Укажите ваш chat_id
        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        await fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message,
                parse_mode: "Markdown",
            }),
        });

        console.log("✅ Сообщение успешно отправлено в Telegram");
    } catch (error) {
        console.error("❌ Ошибка отправки в Telegram", error);
    }

    // === ОТПРАВКА В WHATSAPP ===
    try {
        const whatsappNumber = "79099846415"; // 🔥 Укажите номер администратора без "+"
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, "_blank"); // Открывает WhatsApp
        console.log("✅ Открыта ссылка на WhatsApp");
    } catch (error) {
        console.error("❌ Ошибка отправки в WhatsApp", error);
    }
};
