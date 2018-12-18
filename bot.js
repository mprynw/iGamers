const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();

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

client.on('message', async message => {
    if (message.author.bot || message.author.id === client.user.id) return;
    if (!message.channel) return;
    if (message.channel.type === "dm") {
        const me = client.users.get('268411471686270976');
        await me.send(`${message.author} (${message.author}) sent me a dm:\n${message}`);
    }
    if (message.content.toLowerCase() === 'igamers') {
        message.reply('Ini invite link untuk iGamers | Indonesian Game! \n Tolong digunakan dengan bijak ya :D \n pakai link ini yaa >> https://igamers.site/');
    }
});

client.login(process.env.BOT_TOKEN)
