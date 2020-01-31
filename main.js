$(document).ready(function() {


// Prima chiamata prende tutti i cd

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

// Funzione per la prima chiamata
function processData(discList) {
  discList.forEach(function (cd) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = cd;
    var html = template(context);
    $('.cds-container').append(html);
  });
}


// Parte una chiamata in base all'opzione scelta che mostra solo i cd del genere scelto
$("select").change(function(){
  var selectVal = $(this).val();
  console.log(selectVal);
  $('.cds-container').text('');

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {
      processDataAgain(data.response, selectVal)

    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
});


function processDataAgain(cds, selectVal) {

  cds.forEach(function (cd) {
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
}








}); // end ready
