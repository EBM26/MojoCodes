// clicking different specifications and getting the boxes to appear and dissappear
$(document).ready(function() {

	$(".featureText").click(function() {
		if (!$(this).hasClass("active")) {
            $(".specText").removeClass("active");
            $(".textDetails").removeClass("activeDetails");
            $(this).addClass("active");
            $(".featuresDetails").addClass("activeDetails");
        };

	});

    $(".specificationText").click(function() {
        if (!$(this).hasClass("active")) {
            $(".specText").removeClass("active");
            $(".textDetails").removeClass("activeDetails");
            $(this).addClass("active");
            $(".specificationDetails").addClass("activeDetails");
        };

    });

    $(".reviewsText").click(function() {
        if (!$(this).hasClass("active")) {
            $(".specText").removeClass("active");
            $(".textDetails").removeClass("activeDetails");
            $(this).addClass("active");
            $(".reviewDetails").addClass("activeDetails");
        };

    });
			
});