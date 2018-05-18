const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => { 
    client.user.setStatus('STREAMING'); 
    setInterval(() => {
    let status = [`iGamers | Indonesian Game`, `On ${client.guilds.size} Server`, `With ${client.users.size} User`] 
    let random = Math.floor(Math.random() * status.length)
    client.user.setGame(status[random], 'https://www.twitch.tv/igamersina'); 
   }, 20000);
    console.log(`${client.user.username} Sedang ONLINE!`); 
});


client.on('message', message => {
    if (message.content === 'iGamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }
});

client.login(process.env.BOT_TOKEN)
