const BOT_TOKEN = "8120391231:AAESkgyQ1_97rkPYuZlBsfRB_5l2PVG74HE\n"; // Токен бота
const ADMIN_CHAT_ID = "8175921251"; // ID администратора
const TEST_CHAT_ID = '522814078'

export async function sendMessageToTelegram(formData) {
    const isTest = formData.name.toLowerCase().includes("test");
    const chatId = isTest ? TEST_CHAT_ID : ADMIN_CHAT_ID;

    let text = `📌 **Новая заявка с сайта**:\n`;

    if (formData.service) text += `🛠 *Услуга*: ${formData.service}\n`;
    if (formData.name) text += `👤 *Имя*: ${formData.name}\n`;
    if (formData.phone) text += `📞 *Телефон*: ${formData.phone}\n`;
    if (formData.passportType) text += `🛂 *Тип паспорта*: ${formData.passportType}\n`;
    if (formData.duration) text += `⏳ *Срок выполнения*: ${formData.duration}\n`;
    if (formData.residence) text += `📍 *Регистрация*: ${formData.residence}\n`;
    if (formData.totalPrice !== undefined) text += `💰 *Стоимость*: ${formData.totalPrice} ₽\n`;

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
