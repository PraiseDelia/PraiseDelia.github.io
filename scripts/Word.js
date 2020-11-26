let toReplace = document.getElementById("search");
toReplace.addEventListener("click", function(){
   document.querySelector(".group3").style.display = "none";
   document.querySelector(".group4").style.display = "block";
})

document.getElementById("replacer").addEventListener("click", ()=>{
   let found = document.querySelector(".find").value;
   let place = new RegExp(found, 'gi')
   let replacement = document.querySelector(".replace").value;
   let string = document.querySelector("#text").value;
   let replacing = string.replace(place, replacement);
   document.querySelector("#text").value = replacing;
   document.querySelector(".group4").style.display = "none";
   document.querySelector(".group3").style.display = "block ";
   document.querySelector(".find").value = "";
   document.querySelector(".replace").value = "";
})

