// jquery code will goes here

$(document).ready(function(){
  $('#demo').counto(12345, 5000);
 
  $('#my-number').counto(12345, 5000,function(){
      
        alert('Done!');
      
      });
      $('#my-number').counto(12345, 5000);
      $('#my-number1').counto(12345, 5000);
      $('#my-number2').counto(12345, 5000);

      // **********************
      $("#circle-1").Circlebar({
        maxValue: 20,
        fontSize: "14px",
        triggerPercentage: true
      });
      var t2 = new Circlebar({
        element: ".circle-2",
        maxValue: 252,
        dialWidth: 40,
        fontColor: "#777",
        fontSize: "30px",
        skin: "fire",
        type: "manual"
      });
    
      new Circlebar({
        element: "#circle-3",
        maxValue: 230,
        size: "240px",
        fontSize: "30px",
        type: "progress"
      });

});





