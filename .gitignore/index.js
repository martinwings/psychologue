const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NTYwMDUwMTg0ODAxNzQ2OTQ0.D3uhOg.hgQtgrS5NEBLi634xF4MT6Rr62w')

bot.on('message', message => {

    if(message.content === 'ping')
       message.channel.send("pong")
    if(message.content === 'lol')
       message.channel.send("mdr")
    if(message.content === 'bonjour')
       message.channel.send("bonjour comment allez-vous")
    if(message.content === 'qui est ton créateur?')
       message.channel.send("moji-wings")
    if(message.content === 'emoji 1')
       message.channel.send(":sob:")
    if(message.content === 'cucurbitace')
})
