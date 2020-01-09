$(document).ready(function(){
    let mainNav = $('#js-menu')
    let navBarToggle = $('#js-navbar-toggle')

    navBarToggle.click( () => {
        mainNav.toggleClass("active");
    })
  
    $('#home').click( () => {
        $('html, body').animate({
            scrollTop: $("#content").offset().top - 100
        }, 2000);
    })
  });