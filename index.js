const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--single-process',
            '--disable-gpu'
        ]
    }
});

client.on('qr', qr => {
    console.log('===== ESCANEA ESTE QR CON +240222392249 =====');
    qrcode.generate(qr, {small: true});
    console.log('=============================================');
});

client.on('ready', () => {
    console.log('🔥 Digital Nodus ACTIVADO pa México/Colombia');
});

client.on('message', async msg => {
    if(msg.body.match(/(hola|info|precio|curso|ganar|negocio)/i)) {
        await msg.reply(🇲🇽 *MÉXICO | COLOMBIA* 🇨🇴\n\n*3 MÉTODOS PARA GANAR EN DÓLARES:*\n\n*1️⃣ WHATSAPP MONEY $88 USD*\n👉 https://go.hotmart.com/E105593307T\n\n*2️⃣ IMPORTADOR LATAM $21 USD*\n👉 https://go.hotmart.com/J105593619K\n\n*3️⃣ AFILIADO DESDE CERO $11 USD*\n👉 https://go.hotmart.com/T105593779R\n\n*Responde 1, 2 o 3* 👇);
    }
    if(msg.body === '1') msg.reply(*WHATSAPP MONEY* 🔥\n👉 https://go.hotmart.com/E105593307T);
    if(msg.body === '2') msg.reply(*IMPORTADOR LATAM* 📦\n👉 https://go.hotmart.com/J105593619K);
    if(msg.body === '3') msg.reply(*AFILIADO DESDE CERO* 💰\n👉 https://go.hotmart.com/T105593779R);
});

client.initialize();
