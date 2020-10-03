
var change = document.body;

function bgChange(){
    var C1 = Math.floor(Math.random() * 300)
    var C2 = Math.floor(Math.random() * 230)
    var C3 = Math.floor(Math.random() * 300)
    var bg = "rgb(" + C1 + ", " +  C2 + ", " + C3 + ")" 
    change.style.backgroundColor = bg;
};
setInterval(bgChange, 2000)