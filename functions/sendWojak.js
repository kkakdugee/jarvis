const Discord = require('discord.js');
require('discord-reply');
const Canvas = require('@napi-rs/canvas');
const randImage = require('./getRandomImage');
//const scaleText = require('./scaleText');
const wrapText = require('./wrapText');

const sendWojak = async function(repliedMessage) {
    const canvas = Canvas.createCanvas(1080, 608);
    const context = canvas.getContext('2d');
    const background = await Canvas.loadImage(randImage());
    let wrappedTextArray = wrapText(repliedMessage.content, context, 200);
    context.font = '30px sans-serif'; // add scaling font size according to text height
    context.fillStyle = '#000000';
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    let height = 50;
    for(var i = 0; i < wrappedTextArray.length; i++) {
        context.fillText(wrappedTextArray[i], canvas.width / 2.6, height += 25);
    }
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'wojak.png');
    repliedMessage.lineReply(attachment);
}
module.exports = sendWojak;