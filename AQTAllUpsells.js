   $(document).ready(function() {
    
    function UpsellOn() {      
      $(".inner-circle3").show();
    };

    function UpsellOff() {      
      $(".inner-circle3").hide();
    };
   


    $('.circle3').click(function() { 
        return (this.tog = !this.tog) ? UpsellOn() : UpsellOff();
    });



  }); 
