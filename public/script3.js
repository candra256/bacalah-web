// Toggle mobile menu
document.getElementById("menu-button").addEventListener("click", function () {
     document.getElementById("mobile-menu").classList.remove("translate-x-full");
     document.getElementById("mobile-menu").classList.add("translate-x-0");
   });
   
   document.getElementById("close-menu").addEventListener("click", function () {
     document.getElementById("mobile-menu").classList.remove("translate-x-0");
     document.getElementById("mobile-menu").classList.add("translate-x-full");
   });