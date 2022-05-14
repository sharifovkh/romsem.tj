var nav = document.querySelector (".nav");
var cart = document.querySelector (".cart");
var home = document.querySelector (".home");
var bigmenuPhone = document.querySelector (".bigmenuPhone")

function openMenuPhone() {
   if(nav.style.transform == "translateX(-100%)"){
      nav.style.transform = "translateX(0%)";
   }else{
      nav.style.transform = "translateX(-100%)"
   }
};

function openCart() {
   if(cart.style.transform == "scale(0)"){
      cart.style.transform = "scale(1)";
   }else{
      cart.style.transform = "scale(0)"
   }
};
