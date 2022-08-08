const wrapText = function(messageContent, context, maxWidth) {
    messageContent = messageContent.replace(/\r?\n|\r/g, " ");
    let words = messageContent.split(" ");
    let currentLine = words[0];
    let wrap = [];
    for(var i = 1; i < words.length; i++) {
        let currentWidth = context.measureText(currentLine + " " + words[i]).width;
        if(currentWidth < maxWidth) {
            currentLine += " " + words[i];
        }
        else {
            wrap.push(currentLine);
            currentLine = words[i];
        }
    }
    wrap.push(currentLine);
    return wrap;
}
module.exports = wrapText;