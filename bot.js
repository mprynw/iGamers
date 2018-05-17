const Discord = require('discord.js');
const client = new Discord.Client();


bot.on("ready", () => { 
 bot.user.setStatus('STREAMING');
    console.log(`${bot.user.username} Sedang ONLINE!`); 
});

client.on('message', message => {
    if (message.content === 'iGamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }
});

client.login(process.env.BOT_TOKEN)
