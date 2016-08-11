$( window ).scroll(function() {
  var wScroll = $(this).scrollTop();

  $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2.5+'%)'
  })

  if(wScroll > $('.beer').offset().top - 600){
      $('.beer-bottle').each(function(){
          $('.beer-bottle').addClass('is-showing');
      })
  }
});

