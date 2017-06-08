
function canvasHandler (img) {
    var canvas = document.getElementById('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, img.width, img.height);
    var bitmap = [];

    for (var i = 0; i < imgData.height; i++) {
        bitmap[i] = [];
        for (var j = 0; j < imgData.width; j++) {
            var index = (i * imgData.width + j) * 4,
                r = imgData.data[index],
                g = imgData.data[index + 1],
                b = imgData.data[index + 2],
                pixel = r * 0.2126 + g * 0.7152 + b * 0.0722,
                color = pixel < 175 ? 0 : 255;

            imgData.data[index] = color;
            imgData.data[index + 1] = color;
            imgData.data[index + 2] = color;
            bitmap[i][j] = color;
        }
    }

    var flag = 0;
    var queue = [];

    for (var i = 0; i < bitmap.length; i++) {
        for (var j = 0; j < bitmap[i].length; j++) {
            if (bitmap[i][j] === 0) {
                if (queue.length === 0) {
                    flag++;
                }
                bitmap[i][j] = flag;
                queue.push([i, j]);
                while (queue.length !== 0) {
                    var temp = queue.shift(),
                        temp_i = temp[0],
                        temp_j = temp[1];
                    if (bitmap[temp_i - 1][temp_j - 1] === 0) {
                        bitmap[temp_i - 1][temp_j - 1] = flag;
                        queue.push([temp_i - 1, temp_j - 1]);
                    }
                    if (bitmap[temp_i - 1][temp_j] === 0) {
                        bitmap[temp_i - 1][temp_j] = flag;
                        queue.push([temp_i - 1, temp_j]);
                    }
                    if (bitmap[temp_i - 1][temp_j + 1] === 0) {
                        bitmap[temp_i - 1][temp_j + 1] = flag;
                        queue.push([temp_i - 1, temp_j + 1]);
                    }
                    if (bitmap[temp_i][temp_j - 1] === 0) {
                        bitmap[temp_i][temp_j - 1] = flag;
                        queue.push([temp_i, temp_j - 1]);
                    }
                    if (bitmap[temp_i][temp_j + 1] === 0) {
                        bitmap[temp_i][temp_j + 1] = flag;
                        queue.push([temp_i, temp_j + 1]);
                    }
                    if (bitmap[temp_i + 1][temp_j - 1] === 0) {
                        bitmap[temp_i + 1][temp_j - 1] = flag;
                        queue.push([temp_i + 1, temp_j - 1]);
                    }
                    if (bitmap[temp_i + 1][temp_j] === 0) {
                        bitmap[temp_i + 1][temp_j] = flag;
                        queue.push([temp_i + 1, temp_j]);
                    }
                    if (bitmap[temp_i + 1][temp_j + 1] === 0) {
                        bitmap[temp_i + 1][temp_j + 1] = flag;
                        queue.push([temp_i + 1, temp_j + 1]);
                    }
                }
            }
        }
    }

    console.log(flag);
    var size = [];

    for (var i = 0; i < bitmap.length; i++) {
        for (var j = 0; j < bitmap[i].length; j++) {
            if (bitmap[i][j] !== 0 && bitmap[i][j] !== 255) {
                size[bitmap[i][j] - 1] = size[bitmap[i][j] - 1] + 1 || 0;
            }
        }
    }

    console.log(size);
}

window.onload = function () {
    var img = new Image();
    img.src = './target.jpg';
    img.onload = function () {
        canvasHandler(img);
    }
}
