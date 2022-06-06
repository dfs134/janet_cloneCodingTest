$(window).resize(function(){
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if($(window).width() > 1024){
            if(scroll > 150){
                $(".displaynon").addClass("fixheaderActive");
            }else{
                $(".displaynon").removeClass("fixheaderActive");
            }
        }else{
            if(scroll > 0){
                $(".fixheader").addClass("fixheaderActive");
            }else{
                $(".fixheader").removeClass("fixheaderActive")
            }
        }
    });
}).resize();




