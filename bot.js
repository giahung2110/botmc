const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || 'yourserver.aternos.me',
    port: parseInt(process.env.MC_PORT) || 25565,
    username: process.env.MC_USER || 'AFK_Bot_123',
  });

  bot.on('spawn', () => {
    console.log('✅ Bot vào server!');
    bot.chat('Bot đang treo để giữ server online 24/24');
  });

  bot.on('end', () => {
    console.log('⚠️ Kết nối ngắt, sẽ reconnect sau 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('❌ Lỗi:', err.message);
  });
}

createBot();
