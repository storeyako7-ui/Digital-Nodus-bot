const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    }
});

// 👇 YASSER, CAMBIA ESTOS 4 DATOS POR LOS TUYOS 👇
const LINK1 = 'PON_AQUI_TU_LINK_WHATSAPP_MONEY';
const LINK2 = 'PON_AQUI_TU_LINK_IMPORTAR_CHINA'; 
const LINK3 = 'PON_AQUI_TU_LINK_AFILIADO_CERO';
const TU_NUMERO = '240XXXXXXXXX'; // Tu WhatsApp con código de Guinea

client.on('qr', qr => {
    console.log('Escanea este QR con WhatsApp:');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Bot Digital Nodus Activo ✅');
});

client.on('message', msg => {
    const texto = msg.body.toLowerCase().trim();
    
    if(texto === 'hola'  texto === '1'  texto === 'dinero' || texto === 'info') {
        msg.reply(💰 *DIGITAL NODUS* | GANA DINERO HOY

Elige tu método favorito:

1️⃣ *WhatsApp Money $37*
Cierra ventas todos los días por WhatsApp
👉 ${LINK1}

2️⃣ *Importador Express $67*  
Compra a $1 en China, vende a $10 aquí
👉 ${LINK2}

3️⃣ *Afiliado Cero $27*
Comisiones sin invertir 1 FCFA
👉 ${LINK3}

✅ Pago seguro Hotmart
✅ Acceso inmediato 
✅ Garantía 7 días

Dale clic al link que quieras.

¿Dudas? Escríbeme: wa.me/${TU_NUMERO});
    }
});

client.initialize();
