const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTY0NDQ0MTQ1Nzk2NTEzODE2.XKo4vQ.IQow3xY7I2_z2iY5vPlxIfoo9-k');