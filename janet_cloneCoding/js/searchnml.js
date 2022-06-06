var ipt1 = document.querySelector('.search');
var ipt2 = document.querySelector('.search input');
var btnout = document.querySelector(".noback");

ipt2.addEventListener('click',function() {
    ipt1.classList.add("searchOn");
    btnout.style.display = "block";
})

btnout.addEventListener('click',function() {
    ipt1.classList.remove("searchOn");
    btnout.style.display = "none";
})