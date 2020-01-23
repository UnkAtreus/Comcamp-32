/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
$(document).ready(function() {
  let mainNav = $("#js-menu");
  let navBarToggle = $("#js-navbar-toggle");

  navBarToggle.click(() => {
    mainNav.toggleClass("active");
  });

  $("#home").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#intro").offset().top - 100
      },
      2000
    );
  });
  window.onscroll = function() {
    // scrollFunction();
  };

  // function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         document.getElementById("navbar").style.top = "0";
  //     } else {
  //         document.getElementById("navbar").style.top = "-73px";
  //     }
  // }
});
