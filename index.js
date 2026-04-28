const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--single-process']
    }
});

client.on('qr', qr => {
    console.log('===== ESCANEA ESTE QR CON +240222392249 =====');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('🔥 Digital Nodus ACTIVADO');
});

client.on('message', async msg => {
    if(msg.body.toLowerCase().includes('hola')){
        await msg.reply('🇲🇽 *MÉXICO | COLOMBIA* 🇨🇴\n\n*1️⃣ WHATSAPP MONEY $88 USD*\nhttps://go.hotmart.com/E105593307T\n\n*2️⃣ IMPORTADOR LATAM $21 USD*\nhttps://go.hotmart.com/J105593619K\n\n*3️⃣ AFILIADO DESDE CERO $11 USD*\nhttps://go.hotmart.com/T105593779R\n\n*Responde 1, 2 o 3*');
    }
    if(msg.body === '1') msg.reply('*WHATSAPP MONEY*\nhttps://go.hotmart.com/E105593307T');
    if(msg.body === '2') msg.reply('*IMPORTADOR LATAM*\nhttps://go.hotmart.com/J105593619K');
    if(msg.body === '3') msg.reply('*AFILIADO DESDE CERO*\nhttps://go.hotmart.com/T105593779R');
});

client.initialize();
