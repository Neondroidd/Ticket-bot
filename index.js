const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Please connect me into a hosting website to enable 24/7 hosting. ItzNexus#5354'))

app.listen(port, () =>
console.log(`Creator: ItzNexus`)
);
const botclient = require("./bot");
const config = require("./config.json");

// define the client
const bot = new botclient(config);

// load colors
bot.color = require('./colors.js');

//load emojis
bot.emoji = require('./emojis.js');

//start the bot
bot.start();









  