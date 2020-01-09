// clicking different offers and changing elements
$(document).ready(function() {

	$(".boxWrapper").click(function() {
		 
		 if (!$(this).hasClass("activeWrapper")) {
            $(".boxWrapper").removeClass("activeWrapper");
            $(".boxWrapper .boxes").removeClass("active");
            $(this).addClass("activeWrapper");
            $(this).find(".boxes").addClass("active");
        };

        if ($(".fourBags").hasClass("active")) {
        	$(".secondLI").show();
        	$(".regularPrice").html("$399.60");
        	$(".instantSavings").html("$250.00");
        	$(".bigPrice").html("$159.00 + $8.95 S&P");
        };

        if ($(".twoBags").hasClass("active")) {
        	$(".secondLI").show();
        	$(".regularPrice").html("$199.80");
        	$(".instantSavings").html("$100.00");
        	$(".bigPrice").html("$99.00 + $8.95 S&P");
        };

        if ($(".oneBag").hasClass("active")) {
        	$(".secondLI").hide();
        	$(".regularPrice").html("$99.90");
        	$(".instantSavings").html("$0.00");
        	$(".bigPrice").html("$99.00 + $8.95 S&P");
        };

	});
			
});











