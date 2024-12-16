/* Theme Name: Skywave - Responsive Bootsrap 5 Landing Page Template
   Author: MarkeyThemes
   Version: 1.0.0
   File Description: Main Js file of the template
*/

function windowScroll() {
  const e = document.getElementById("navbar-sticky");
  e &&
    (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
      ? e.classList.add("nav-sticky")
      : e.classList.remove("nav-sticky"));
}
window.addEventListener("scroll", (e) => {
  e.preventDefault(), windowScroll();
});
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ? (console.log(document.body.scrollTop), (mybutton.style.display = "block"))
    : (mybutton.style.display = "none");
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
