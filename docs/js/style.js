$(document).ready(function() {
    // make page load smooth
    $("body").fadeIn(500);
    window.onscroll = function() {onScroll()};
});

function onScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("navBar").style.background = "#07134F";
    } else {
      document.getElementById("navBar").style.background = "none";
    }
};