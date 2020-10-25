
var toReplace = document.querySelector(".find");

toReplace.addEventListener("click", function(){
   var find = document.getElementById("text").value;
   var splitUp = find.split(" ");
   for(var i = 0; i < splitUp.length; i++){
      var collection = splitUp[i]
      var replacements = [collection.replace("hello", "hi")]
      var reCollect = replacements.join("  ")
      document.getElementById("text").value = reCollect;
   }
})
