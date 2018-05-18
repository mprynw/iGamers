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
    if (message.content === 'welcome') {
        const embed = new Discord.RichEmbed()
  .setTitle("Welcome to iGamers")
  .setAuthor("iGamers", "https://i.imgur.com/1UbbnaG.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x3DB4FF)
  .setDescription("Selamat datang di iGamers!!\n \n iGamers merupakan server Komunitas Game meliputi game PC, Android, IOS, PS, XBOX, Web Game, dan lain sebagainya.  Server ini akan memfasilitasi notifikasi update, game baru, glitch, bug, giveaway. Jadi Stay Tune ya!!\n \nJangan lupa share link invite kami! \n https://discord.gg/dR422Nu")
      .setFooter("This bot created by mprw#2329", "https://i.imgur.com/1UbbnaG.jpg")
  .setImage("https://i.imgur.com/OgupJFq.gif")
  .setThumbnail("https://i.imgur.com/1UbbnaG.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()

  message.channel.send({embed});
       }
});

client.login(process.env.BOT_TOKEN)
