var change = document.body;

function bgChange(){

    var Colours = ["green", "red", "yellow", "pink", "crimson", "blue", "orange", "purple"]
    change.style.backgroundColor = Colours[ Math.floor(Math.random() * 8)];
