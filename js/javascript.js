//SMOOTH SCROLL
 jQuery(document).ready(function($) {
  $(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 550; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });
  });
});


 //FOND NAV
function fixDiv() {
  var $cache = $('#nav');
  if ($(window).scrollTop() > 100)
    $cache.css({'background-color': 'rgba(255,255,255,0.9)'});
  else
    $cache.css({'background-color': 'transparent'});
}
$(window).scroll(fixDiv);
fixDiv();


//scrollSpy function
    function scrollSpy() {
      var sections = ['section2', 'section3', 'section4'];
      var current;
      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }
      $("nav a[href='#"+current+"']").addClass('active');
      $("nav a").not("a[href='#"+current+"']").removeClass('active');
    }
    // smooth scrolling navigation
    $("nav a").click( function() {
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 300);
      return false;
    });
    //scrollSpy call
    $(document).ready( function() {
      scrollSpy();
    });
    $(window).scroll( function() {
      scrollSpy();
    });


//SCROLLSPY
/*$(document).ready(function(){

var navTop = $('#nav').offset().top;
var navHeight = $('#nav').height();
var windowH = $(window).height();

$('.section').height(windowH);

$(document).scroll(function(){
  var st = $(this).scrollTop();

  $('.section').each(function(index, element) {
    if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
      $(this).addClass('active');

            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').parent('li').addClass('active');
      // or $('#nav li:eq('+index+')').addClass('active');
    }else{
      $(this).removeClass('active');

            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').parent('li').removeClass('active');
      //or $('#nav li:eq('+index+')').removeClass('active');
    }

  });

});

});*/

