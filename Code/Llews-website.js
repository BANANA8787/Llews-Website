
// map JS
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


var map = L.map('map').setView([-41.2866, 174.7756], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var milford = L.marker([-44.81372, 167.78604]).addTo(map);
var kepler = L.marker([-45.45157, 167.57511]).addTo(map);
var paparoa = L.marker([-42.13057, 171.34831]).addTo(map);
var heaphy = L.marker([-40.88619, 172.30254]).addTo(map);
var oldghostroad = L.marker([-41.79023, 172.04795]).addTo(map);
var humpridge = L.marker([-46.13014, 167.69045]).addTo(map);
var routeburn = L.marker([-44.76340, 168.17650]).addTo(map);

milford.bindPopup("<b>Milford Track</b><img src='../Images/milford.jpg' style='width: 200px;'>");
kepler.bindPopup("<b>Kepler Track</b><img src='../Images/kepler.jpg' style='width: 200px;'>");
paparoa.bindPopup("<b>Paparoa Track</b><img src='../Images/paparoa.jpg' style='width: 200px;'>");
heaphy.bindPopup("<b>Heaphy Track</b><img src='../Images/heaphy.jpg' style='width: 200px;'>");
oldghostroad.bindPopup("<b>Old Ghost Road</b><img src='../Images/oldghostroad.jpg' style='width: 200px;'>");
humpridge.bindPopup("<b>Hump Ridge Track</b><img src='../Images/humpridge.jpg' style='width: 200px;'>");
routeburn.bindPopup("<b>Routeburn Track</b><img src='../Images/routeburn.jpg' style='width: 200px;'>");var c = document.getElementById("myCanvas");


/*  CANVAS JS  */

//canvas vars
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Consts
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const PADDLE_SPEED = 10;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

//vars misc
var paddleY = CANVAS_HEIGHT/2 - PADDLE_HEIGHT/2;
var paddleX = 5;
var keyPressedName = "";

let keyMap = {
    'w': false,
    'a': false,
    's': false,
    'd': false,
}

function main() {
    //clearing screen then drawing the stuff 
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(paddleX,paddleY,PADDLE_WIDTH,PADDLE_HEIGHT);

    ctx.setLineDash([5, 3]);

    ctx.beginPath();
    ctx.moveTo(CANVAS_WIDTH/2, 0);
    ctx.lineTo(CANVAS_WIDTH/2, CANVAS_HEIGHT);
    ctx.stroke();

    //listeners for key presses and releases
    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', keyReleased);

    
    //paddle movement up/down
    switch(true){
        case (keyMap['w'] == true || keyMap['arrowUp'] == true) && paddleY > 0:
            paddleY -= PADDLE_SPEED;
            break;
        case (keyMap['s'] == true || keyMap['arrowDown'] == true) && paddleY + PADDLE_HEIGHT < CANVAS_HEIGHT:
            paddleY += PADDLE_SPEED;
            break;
    }

    //paddle movement left/right
    switch(true){
        case (keyMap['a'] == true || keyMap['arrowLeft'] == true) && paddleX > 0:
            paddleX -= PADDLE_SPEED;
            break;
        case (keyMap['d'] == true || keyMap['arrowRight'] == true) && paddleX + PADDLE_WIDTH < CANVAS_WIDTH /2:
            paddleX += PADDLE_SPEED;
            break;
    }
}

//listens for keypresses
function keyPressed(event) {
    keyMap[event.key] = true;
}

//listens for key releases
function keyReleased(event) {
    keyMap[event.key] = false;
}

//runs the main function at 30fps
window.onload = setInterval(main, 1000/30);