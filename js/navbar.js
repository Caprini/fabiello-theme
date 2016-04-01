var scrollAmount = 90;

$(window).on('scroll', function(){
  if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('navbar-fixed-top')){
    $('nav').addClass('navbar-fixed-top'); 
  }
  else if($(window).scrollTop()<scrollAmount && $('nav').hasClass('navbar-fixed-top')){
     $('nav').removeClass('navbar-fixed-top') 
  }
});


