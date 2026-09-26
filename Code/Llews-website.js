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

milford.bindPopup("<b>Milford Track</b><br>");
kepler.bindPopup("<b>Kepler Track</b><br>");
paparoa.bindPopup("<b>Paparoa Track</b><br>");
heaphy.bindPopup("<b>Heaphy Track</b><br>");
oldghostroad.bindPopup("<b>Old Ghost Road</b><br>");
humpridge.bindPopup("<b>Hump Ridge Track</b><br>");
routeburn.bindPopup("<b>Routeburn Track</b><br>");