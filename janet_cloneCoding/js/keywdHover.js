var fade = document.querySelectorAll(".fade");
            var kwdbox = document.querySelectorAll(".kb");
            var opa = document.querySelectorAll(".hotmenu img");
            var hova = document.querySelectorAll(".hotmenu a");
            var hidden = document.querySelectorAll(".hidden");

            for(let i = 0; i < kwdbox.length; i++) {
                kwdbox[i].addEventListener('mouseover', function(){
                    fade[i].classList.add("fadein");
                    opa[i].style.opacity="100%";
                    kwdbox[i].classList.add("on");
                    kwdbox[i].style.border = "none";
                    hova[i].classList.add("over");
                    hidden[i].classList.add("hiddenon");
                })
            }
            
            for(let i = 0; i < kwdbox.length; i++){
                kwdbox[i].addEventListener('mouseout',function(){
                    fade[i].classList.remove("fadein");
                    opa[i].style.opacity="20%";
                    kwdbox[i].classList.remove("on");
                    kwdbox[i].style.border = "1px solid #bbb";
                    hova[i].classList.remove("over");
                    hidden[i].classList.remove("hiddenon");
                })
            }