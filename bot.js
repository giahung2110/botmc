const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || 'sanzudzvcl-ItVQ.aternos.me',
    port: parseInt(process.env.MC_PORT) || 13567,
    username: process.env.MC_USER || 'Giahung_Bot',
    version: '1.21.4' // 💥 Quan trọng: Thêm dòng này để khớp version
  });

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào server thành công!');
    bot.chat('🤖 Bot treo để giữ server online 24/24!');
  });

  bot.on('end', () => {
    console.log('⚠️ Bot bị ngắt kết nối, thử lại sau 10 giây...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('❌ Lỗi:', err.message);
  });
}

createBot();

