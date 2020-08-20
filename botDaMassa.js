const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const ytdl = require('ytdl-core');

const token = "";

bot.login(token)
bot.on("ready", () => {
    console.log("estou pronto para o trabalho senhor")
})

bot.on("message", msg => {
  if (msg.content === "eae galera") {
     msg.reply("Olá senhor. Bem vindo ao servidor")
  }    
  if (msg.content === "passa o código ae Alfredão") {
    msg.reply("https://github.com/KmzFakeee/botdamassa/blob/master/botDaMassa.js")
  }
  if (msg.content === "Alfred") {
      msg.reply("Estou aqui senhor")
  }
})    
        //Parte de Musica do Bot

bot.on('message', async message => {
  if (!message.guild) return;

  if (message.content == '?tocar') {
  
    
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      
      //parte incompleta
        
      const ytdl = require('ytdl-core');
      connection.play(ytdl("https://www.youtube.com/watch?v=SPteDAsr7b4", { filter: 'audioonly' }));
    
      } else {
      message.reply('Você precisa entrar em um canal primeiro');
    }
  }
});
