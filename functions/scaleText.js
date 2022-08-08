const scaleText = function(canvas, messageContent) {
    let size = 50;
    let textHeight = 0;
    while(textHeight > canvas.height) {
        size -= 5;
    }
    return size;
}
module.exports = scaleText;