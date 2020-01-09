$(document).ready(function() {

 $(".question").click(function(){

        if(!$(this).hasClass("active")) {
            $(".question").removeClass("active");
            $(".answer").slideUp("slow");
            $(".plus").html("-");
            $(this).addClass("active");
            $(this).find(".answer").slideDown("slow");
            $(this).find(".plus").html("+");
            } else if($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".answer").slideUp("slow");
                $(".plus").html("-");
              };

    });
});