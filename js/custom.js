$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".home .main-nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.text() != 'Projects' ) { //exclude projects link hash
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $('.project-nav a').click(function(e) {
  	e.preventDefault();
  	$('.project-nav a').removeClass('current');
  	$(this).addClass('current');
  	var projectname = $(this).text().toLowerCase();
  	console.log(projectname);
  	$('.project').hide();
  	if($('.project').hasClass(projectname)) {
  		$('.come-back-soon').hide();
  	  	$('.project.'+projectname).show();
  	 } else {
  	 	$('div.come-back-soon').show();
  	 }
  })

  $('.responsive-menu-container').click(function(e) {
    e.preventDefault();
    $('.mobile-main-nav-container').slideToggle(300);
  });

  // $('.main-nav-container a').click(function() {
  //   $('.mobile-main-nav-container').hide();
  // });


  var windowWidth = $(window).width();
  console.log(windowWidth)
  if (windowWidth <= 1200) { // responsive screensize @1200
    $('.main-nav-container').addClass('mobile-main-nav-container');
    $(window).scroll(function() {
      var scroll = jQuery(window).scrollTop();
      console.log(scroll);
      //>=, not <=
      if ($('.mobile-main-nav-container').is(':visible') && scroll >= 30) {
       $('.mobile-main-nav-container').slideUp(); 
      }
    });

    $('.hasChildren').click(function(e) {
      e.preventDefault();
      $(this).find('.submenu').slideToggle();
    })

    $('.submenu a').click(function() {
      var itemClicked = $(this).attr('href');
//      console.log(itemClicked + ' submenu item clicked')
      window.location = itemClicked;
    });
  };

  $('.client-type li a').click(function(e) {
    e.preventDefault();
    $('.client-type li a').removeClass('current');
    $(this).addClass('current');

    var categoryType = $(this).text().toLowerCase();
    $('.client-list li').hide();
    $('.client-list li.' + categoryType).show();

    if(categoryType == 'all') {
      $('.client-list li').show()
    }
  })
});