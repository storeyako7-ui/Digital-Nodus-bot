const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
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

client.on('authenticated', () => {
    console.log('✅ WHATSAPP AUTENTICADO');
});

client.on('auth_failure', msg => {
    console.error('❌ FALLO DE AUTENTICACIÓN', msg);
});

client.on('message', async msg => {
    const chat = await msg.getChat();
    
    if(msg.body.match(/(hola|info|precio|curso|ganar|negocio)/i)) {
        await chat.sendStateTyping();
        await msg.reply(🇲🇽 *MÉXICO | COLOMBIA* 🇨🇴

*3 MÉTODOS PARA GANAR EN DÓLARES DESDE CASA:*

*1️⃣ WHATSAPP MONEY $88 USD*
👉 https://go.hotmart.com/E105593307T

*2️⃣ IMPORTADOR LATAM $21 USD*  
👉 https://go.hotmart.com/J105593619K

*3️⃣ AFILIADO DESDE CERO $11 USD*
👉 https://go.hotmart.com/T105593779R

*Responde 1, 2 o 3* 👇);
    }
    
    if(msg.body === '1') msg.reply(*WHATSAPP MONEY* 🔥\n👉 https://go.hotmart.com/E105593307T);
    if(msg.body === '2') msg.reply(*IMPORTADOR LATAM* 📦\n👉 https://go.hotmart.com/J105593619K);
    if(msg.body === '3') msg.reply(*AFILIADO DESDE CERO* 💰\n👉 https://go.hotmart.com/T105593779R);
});

client.initialize();
