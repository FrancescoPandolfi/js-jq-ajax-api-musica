$(document).ready(function() {




$.ajax({
  url: "https://flynn.boolean.careers/exercises/api/array/music",
  method: "GET",
  success: function (data, stato) {

    var response = data.response;
    processData(response);

  },
  error: function (richiesta, stato, errore) {
    alert("E' avvenuto un errore. " + errore);
  }
});

function processData(discList) {
  discList.forEach(function (cd) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = cd;
    var html = template(context);
    $('.cds-container').append(html);
  });
}

$("select").change(function(){
  var selectVal = $(this).val();
  console.log(selectVal);
  $('.cds-container').text('');

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {

      var response = data.response;

        response.forEach(function (cd) {
          var source = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var context = cd;
          var html = template(context);

          if (selectVal == cd.genre) {
            $('.cds-container').append(html);
          } else if (selectVal == 'Tutti') {
            $('.cds-container').append(html);
          }



        });


    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });

  // function processData(discList) {
  //   discList.forEach(function (cd) {
  //     var source = $("#entry-template").html();
  //     var template = Handlebars.compile(source);
  //     var context = cd;
  //     var html = template(context);
  //     $('.cds-container').append(html);
  //   });
  // }




});





$(document)






}); // end ready
