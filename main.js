$(document).ready(function() {




$.ajax({
  url: "https://flynn.boolean.careers/exercises/api/array/music",
  method: "GET",
  success: function (data, stato) {

    var arrayResponse = data.response;
    processData(arrayResponse);

  },
  error: function (richiesta, stato, errore) {
    alert("E' avvenuto un errore. " + errore);
  }
});



//



  function processData() {
    i=0;
    arrayResponse.forEach(function(item) {
      // console.log(item);
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);

      var context = arrayResponse[i];
      var html = template(context);

      $('.cds-container').append(html);
      i++;

    });
  }








}); // end ready
