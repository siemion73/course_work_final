$(document).ready(function(){
    $("#text_but").submit(function(event){
      event.preventDefault();
	  var form_data=$(this).serialize();
      $.ajax({
        url: "https://www.enformed.io/gwc7c0xu",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: form_data ,
        success: function(){
          console.log("Your form was successfully received!");
        },
        error: function(){
          console.log("Failure. Try again.");
        }
      });
    });
  });