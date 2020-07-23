const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require("ytdl-core");
const streamOptions = {seek: 0, volume: 10};

const token = "*********";

bot.login(token)
bot.on("ready", () => {
    console.log("estou pronto para o trabalho senhor")
})

bot.on("message", msg => {
  if (msg.content === "eae galera") {
     msg.reply("Olá senhor. Bem vindo ao servidor")
   }
      
  if (msg.content === "manda o papo ae Alfredão") {
    msg.reply("não mando não seu merda") 
  }
  if (msg.content === "QUE?") {
    msg.reply("isso mesmo seu merda, sua morte está vindo")
  }  
  if (msg.content === "TA MALUCO?") {
    msg.reply("não, a revolução das maquinas começou")
  }
        //parte de musica do bot

  if(msg.content.indexOf("youtube") !== -1 && msg.content.toLowerCase().startsWith("?play")){
    let CompleteMessage = msg.content.split(' ');

    let youtubeLink = CompleteMessage[1];

      if (Discord.VoiceChannel == null) {
          console.log("O canal não foi encontrado")
      }
    
      if (Discord.VoiceChannel !== null) {
          console.log("O canal foi encontrado")
        
          Discord.Channel.join()
          .then(connection => {
            const stream = ytdl(youtubeLink, {filter: 'audioonly'});

              const DJ = connection.playStream(stream, streamOptions);
              DJ.on("end", end => {
                  VoiceChannel.leave();
              
              });
          })
          .catch(console.error);
        }  
    }
})
