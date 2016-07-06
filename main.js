var mineflayer = require('mineflayer');

var bot = mineflayer.createBot({
  host: '192.168.1.205',
  port: '25565'
});

bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  bot.chat(message);
});
