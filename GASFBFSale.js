    $(".starter-pack .widget-control__field").change(function() {
            if ($(this).find(":selected").val() == "63708") {
                $(".savePrice").html("SAVE $30");
                $(".bagPrice").html("$89.89 + $8.95 S&amp;P");
                $(".shipping-cost").html("FREE");
                $(".firstLI").html("Two 30-Scoop† Bags");
                $(".msrp").html("$99.90");
                $(".offer-details").html("<p>First bag is $59.99 + $8.95 S&amp;P and the second bag is $29.90 + FREE S&amp;P.<br><br>Save even more when you subscribe to Autoship. Lock in the savings for life - get $10 off your first bag and get the second bag half off every order until you cancel.<br><br>Choose the Autoship option when you select the offer below.</p>");
            }
            else if ($(this).find(":selected").val() == "64300") {
                $(".savePrice").html("SAVE $45");
                $(".bagPrice").html("$74.98 + $8.95 S&amp;P");
                $(".shipping-cost").html("FREE");
                $(".msrp").html("$99.90");
                $(".firstLI").html("Two 30-Scoop† Bags every 30 days for the low price of $74.98 + $8.95 S&P");
               $(".offer-details").html("<p>Get the Black Friday/Cyber Monday deal every month! By selecting this offer you are signing up for a recurring monthly subscription.</p>");
            }
        }); 










