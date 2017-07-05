
// Smooth scrolling
$(document).ready(function(){

  $('nav.navbar a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    let target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = target;
    });
  });

});

//Carousel staff
$('#carousel-prev').click(function() {
  $('.carousel').carousel('prev');
});

$('#carousel-next').click(function() {
  $('.carousel').carousel('next');
});

// preva img toggle
$('#rentobutton').on('click', function(){
  $('#preva').toggleClass('hidden');
});
