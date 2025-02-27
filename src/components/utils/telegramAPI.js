const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE\n"; // Токен бота
const ADMIN_CHAT_ID = "8175921251"; // ID администратора
const TEST_CHAT_ID = '522814078'

export async function sendMessageToTelegram(formData) {
    const isTest = formData.name.toLowerCase().includes("test");
    const chatId = isTest ? TEST_CHAT_ID : ADMIN_CHAT_ID;

    const text = `
📌 **Новая заявка с сайта**:
👤 *Имя*: ${formData.name}
📞 *Телефон*: ${formData.phone}
🛂 *Тип паспорта*: ${formData.passportType || "Не выбран"}
⏳ *Срок выполнения*: ${formData.duration || "Не выбран"}
📍 *Регистрация*: ${formData.residence || "Не указана"}
💰 *Стоимость*: ${formData.totalPrice} ₽
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" }),
        });

        const result = await response.json();
        return result.ok;
    } catch (error) {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        return false;
    }
}
