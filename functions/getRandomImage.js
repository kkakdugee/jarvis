const path = require("path");
const fs = require('fs');

const getRandomImage = function() {
    const imgdir = fs.readdirSync('./images/')
    .map(file => {
            return path.join('./images/', file);
    });
    return imgdir[Math.floor(Math.random() * imgdir.length)];
}
module.exports = getRandomImage;