
//staff getjson and markup
$.getJSON('../staff.json', function(data){
  $.each(data, function(key, val){
    $('<div class="item"><img src="../images/Employee/' + key + '.jpg" class="img-responsive img-rounded"><div><div id="' + key
      + '"></div></div></div>').appendTo('.carousel-inner');

    $('#' + key).html('<span id=\'staff-name\'>' + val.firstname + ' ' + val.middlename + ' ' + val.lastname + '</span><br>' + val.title + ' <br>' + val.experience);
  });

  $('.carousel-inner div.item:first').addClass('active');
});
