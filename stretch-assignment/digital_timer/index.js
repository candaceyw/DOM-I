let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let timer = 0;

var interval = setInterval(function() {
    if (timer >= 9) {
        clearInterval(interval);
    }
    timer++;
    console.log('every 1s');
     }, 1000)