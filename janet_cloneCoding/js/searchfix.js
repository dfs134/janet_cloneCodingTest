var inputbtn = document.querySelector(".fixsearch input");
var buttonbtn = document.querySelector(".fixsearch button");
var btnout = document.querySelector(".noback");
var allsch = document.querySelector(".fixsrc img");

buttonbtn.addEventListener('mouseover', function(){
    inputbtn.classList.add("fixsearchov");
    allsch.style.visibility = "hidden";
    btnout.style.display = "block";
})
btnout.addEventListener('click', function(){
    inputbtn.classList.remove("fixsearchov");
    allsch.style.visibility = "visible";
    btnout.style.display = "none";
})
