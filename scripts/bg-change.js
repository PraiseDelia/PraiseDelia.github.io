
var change = document.body;

function bgChange(){
    var range = Math.ceil(Math.random() * 8)
    var C1 = (range * 25)
    var C2 =(range * 20)
    var C3 = (range * 30)
    var bg = "rgb(" + C1 + ", " +  C2 + ", " + C3 + ")" 
    change.style.backgroundColor = bg;
    
};
setInterval(bgChange, 2000)
