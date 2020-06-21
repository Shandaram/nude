var video;
var slider;
var trackColor = [0, 0, 0];
var chroma;
var target;

function setup() {
    canvas = createCanvas(innerWidth, innerHeight, WEBGL);
    pixelDensity(0.5)
    video = createCapture(VIDEO);
    video.size(innerWidth, innerHeight);
    video.id('p5cam')
    video.hide()
    canvas.id('p5canvas')
    trackColor = video.get(mouseX, mouseY);
    var seriously = new Seriously();
    var src = seriously.source('#p5cam')
    target = seriously.target('#p5canvas')

    chroma = seriously.effect('chroma');
    chroma.source = src
    target.source = chroma
    chroma.clipBlack= 0.1
    chroma.clipWhite= 0.3

    seriously.go();
}


function mousePressed() {
    trackColor = video.get(mouseX, mouseY);

    var r = trackColor[0] / 255
    var g = trackColor[1] / 255
    var b = trackColor[2] / 255

    chroma.screen = [r, g, b, 1];
    document.body.style.backgroundColor = `rgb(${trackColor[0]}, ${trackColor[1]}, ${trackColor[2]})`;
 

}

