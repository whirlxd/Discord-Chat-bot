const discord = require("discord.js")
const mom  = new discord.Client()
const { MessageEmbed } = require("discord.js")
const alexa  = require('alexa-bot-api')
var   chatbot = new alexa("aw2plm")
const ai = new alexa();

mom.on('ready' , () => {
  console.log("Hello I'm ready to serve you");
   mom.user.setActivity("Making your server active"); })

mom.on('message', async message => {   
    if(message.author.bot) return; 
    let content = message.content;
    chatbot.getReply(content , "english").then(r => message.channel.send(r))
//u can add a help command too like this -
//else if{message.....}
//but nithish is fucking gay the bot responds twice with the alexa api message and ur message 
  
client.log(ur token )
