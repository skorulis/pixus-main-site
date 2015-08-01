$("#registerInterest").submit(function(e) {
  e.preventDefault()
  
  var postData = $(this).serializeArray();
  var formURL = $(this).attr("action");
  
  console.log(formURL);
  console.log(postData);
  
  $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            $("#registerInterest").hide()
            $("#registerSuccess").show()
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails      
        }
    });

});