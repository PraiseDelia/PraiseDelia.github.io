
var toReplace = document.querySelector(".find");

toReplace.addEventListener("click", function(){
    var find = document.getElementById("text").value;
    var collection = [find]
    for(access of collection){
        var replace = access.replace("hello", "hi")
        document.getElementById("text").value = replace;
    }
})