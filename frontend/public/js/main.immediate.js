// เอา config ต่างๆ ที่รันทันทีเมื่อเห็นหน้าเว็บไว้ในนี้

// Lazy loading images
document.addEventListener("DOMContentLoaded", yall);

// ParticleJS
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "js/particlesjs-config.json", function() {});

// Mobile Nav
var navState = 0;
var navElement = document.getElementById("Nav-mobile");
function toggleMobileNav() {
  if (navState) {
    navElement.classList.remove("Nvmb-active");
  } else {
    navElement.classList.add("Nvmb-active");
  }
  navState = !navState;
}

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true
});
