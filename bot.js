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

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);
  const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
  const welcema = new Discord.RichEmbed()
      .setTitle("Welcome to iGamers")
      .setURL("https://discord.gg/dR422Nu")
      .setAuthor("iGamers", "https://i.imgur.com/1UbbnaG.jpg")
      .addField("Username ", member.user.username, true)
      .addField("UserID ", member.user.id, true)
      .setFooter("This bot created by mprw#2329", "https://i.imgur.com/1UbbnaG.jpg")
      .setThumbnail(member.user.displayAvatarURL)
      .setColor(0x3DB4FF)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
  client.channels.get('419619500334514191').send({embed: welcema});
  newUsers[guild.id].clear();
  const welcemb = new Discord.RichEmbed()
      .setTitle("Welcome to iGamers")
      .setURL("https://discord.gg/dR422Nu")
      .setAuthor("iGamers", "https://i.imgur.com/1UbbnaG.jpg")
      .setDescription("iGamers merupakan server Komunitas Game meliputi game PC, Android, IOS, PS, XBOX, Web Game, dan lain sebagainya.  Server ini akan memfasilitasi notifikasi update, game baru, glitch, bug, giveaway. Jadi Stay Tune ya!!\nJangan lupa share link invite kami! \nhttps://discord.gg/dR422Nu")
      .addField("Step 1", "Setelah kamu bergabung kamu harus membaca RULES server kami dan akan mendapatkan role Member iGamers untuk melihat seluruh server! Dapat diklik di link berikut:\nhttps://discord.gg/dR422Nu.")
      .addField("Step 2", "Kemudian Kamu bisa mengambil role game lainnya untuk melihat channel game lainnya:\nhttps://discord.gg/f7KTMmd")
      .setFooter("This bot created by mprw#2329", "https://i.imgur.com/1UbbnaG.jpg")
      .setImage("https://i.imgur.com/OgupJFq.gif")
      .setThumbnail("https://i.imgur.com/1UbbnaG.jpg")
      .setColor(0x3DB4FF)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
  member.user.send({
      embed: welcemb
  });

});

client.on('message', message => {
  if (message.author.bot || message.author.id === client.user.id) return;
  if (!message.channel) return;
  if (message.channel.type === "dm") {
      const me = client.users.get('268411471686270976');
      await me.send(`${message.author} (${message.author}) sent me a dm:\n${message}`);
  }
    if (message.content.toLowerCase() === 'igamers') {
      message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://discord.gg/dR422Nu');
       }

       if (message.content.toLowerCase().includes("")) {
           if (message.channel.id !== "441519563868340224") return
           const welcemb = new Discord.RichEmbed()
               .setTitle("Welcome to iGamers")
               .setURL("https://discord.gg/dR422Nu")
               .setAuthor("iGamers", "https://i.imgur.com/1UbbnaG.jpg")
               .setDescription("iGamers merupakan server Komunitas Game meliputi game PC, Android, IOS, PS, XBOX, Web Game, dan lain sebagainya.  Server ini akan memfasilitasi notifikasi update, game baru, glitch, bug, giveaway. Jadi Stay Tune ya!!\nJangan lupa share link invite kami! \n https://discord.gg/dR422Nu")
               .addField("Step 1", "Setelah kamu bergabung kamu harus membaca RULES server kami dan akan mendapatkan role Member iGamers untuk melihat seluruh server! Dapat diklik di link berikut: https://discord.gg/dR422Nu.")
               .addField("Step 2", "Kemudian Kamu bisa mengambil role game lainnya untuk melihat channel game lainnya: https://discord.gg/f7KTMmd")
               .setFooter("This bot created by mprw#2329", "https://i.imgur.com/1UbbnaG.jpg")
               .setImage("https://i.imgur.com/OgupJFq.gif")
               .setThumbnail("https://i.imgur.com/1UbbnaG.jpg")
               .setColor(0x3DB4FF)
               /*
                * Takes a Date object, defaults to current date.
                */
               .setTimestamp()
           message.author.send({
               embed: welcemb
           });
       }
    if(message.content.toLowerCase()  === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }
});

client.login(process.env.BOT_TOKEN)
