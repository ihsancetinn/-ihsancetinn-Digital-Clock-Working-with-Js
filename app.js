function clock() {
    



const saat = document.getElementById("saat");
const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

let s = new Date().getHours();
let d =  new Date().getMinutes();
let ss = new Date().getSeconds();

saat.innerHTML = s;
dakika.innerHTML = d;
saniye.innerHTML= ss;
}
let interval = setInterval(clock, 1000);