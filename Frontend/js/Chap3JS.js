   $("document").ready(function(){
       $(".guess_box").hover(
              function(){
              $(this).addClass("hover");},
              function(){
                     $(this).removeClass("hover")
              }
              );
       
          $(".guess_box").click(getDiscount);
          var hideCode = function(){
              var numRand = getRandom(4);
              $(".guess_box").each(function(index, value){
                     if (numRand==index){
                            $(this).append("<span id='has_Discount'> </span>");
                            return false;
                            }
              });
            }
            hideCode();
          function getDiscount()          
            {
              
                var discount;
                if ($.contains(this, document.getElementById("has_Discount"))) {
                     var my_num=getRandom(100)
                     discount="<p>Your CODE is "+ my_num+"%</p>";
                }
                else{
                     discount="<p>Sorry, no discount this time</p>";
                }
  
                $(".guess_box").each(function(){
                     if ($.contains(this, document.getElementById("has_Discount"))) {
                            $(this).addClass("discount");
                            //code
                     }
                     else{
                            $(this).addClass("no_discount");
                     }
                    $(this).unbind();
                    });
                $("#result").append(discount);
            }
            function getRandom(num){
              var rand_num=Math.floor(Math.random()*num);
              return rand_num;
            }
 
           });
