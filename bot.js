require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () =>{
	console.log('I am ready!');
});

client.on("message", message =>{
	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !==0) return;
});

const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
const message = args.shift().toLowerCase();

client.on('message', message => {
	if(message.content == 'ping') {
		message.reply('pong');
	}
});

client.login(process.env.BOT_TOKEN);