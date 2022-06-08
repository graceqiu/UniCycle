$(document).ready(function() {
  // make page load smooth
  $("body").fadeIn(500);
  window.onscroll = function() {onScroll()};


  // title animation
  var textWrapper = document.querySelector('.ml6 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 100 * i
    });
  
  // brand logo animations
  $("#logos").children().each(function() {
    $(this).mouseenter(function() {
      $(this).effect("bounce", 1500);
    })
  })
  
});

function onScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("navBar").style.background = "#07134F";
    } else {
      document.getElementById("navBar").style.background = "none";
    }
};

