
const button = document.querySelector('.btn');
button.addEventListener('click', function(e) {
    window.location = 'accueil.html';
});

//connecte rasperry pi au serveur
const socket = io.connect('http://localhost:3000');

//recupere les données du serveur
socket.on('data', function(data) {
    console.log(data);
    document.getElementById('temp').innerHTML = data.temp;
    document.getElementById('hum').innerHTML = data.hum;
    document.getElementById('lum').innerHTML = data.lum;
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('time').innerHTML = data.time;
}


