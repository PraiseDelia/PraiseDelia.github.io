var change = document.body;

function bgChange(){
    var range = Math.ceil(Math.random() * 8)
    var Colors = ["orange", "blue", "black", "crimson", "green", "purple", "pink"]
    var now = Colors[range];
    change.style.backgroundColor = now;
    
};
setInterval(bgChange, 1500)
