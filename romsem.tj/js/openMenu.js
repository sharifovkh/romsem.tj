var home = document.querySelector (".home");
var pizza = document.querySelector (".pizza");
var seti = document.querySelector (".seti");
var wok = document.querySelector (".WOK")
var roll = document.querySelector (".roll")
var sushi = document.querySelector (".sushi")
var salati = document.querySelector (".salati")
var bigmenuPhone = document.querySelector (".bigmenuPhone")
var otziv = document.querySelector (".otziv")

function OpenPizza() {
   home.style.display = "none";
   wok.style.display = "none";
   seti.style.display = "none";
   pizza.style.display = "block";
   roll.style.display = "none"
   sushi.style.display = "none"
   salati.style.display = "none"
   bigmenuPhone.style.display = "none"

} 

function OpenSeti() {
   home.style.display = "none";
   pizza.style.display = "none";
   wok.style.display = "none";
   seti.style.display = "block";
   roll.style.display = "none"
   sushi.style.display = "none"
   salati.style.display = "none"
   bigmenuPhone.style.display = "none"


}

function OpenWok() {
   home.style.display = "none";
   pizza.style.display = "none";
   seti.style.display = "none";
   wok.style.display = "block";
   roll.style.display = "none"
   salati.style.display = "none"
   bigmenuPhone.style.display = "none"
   sushi.style.display = "none"
}

function OpenRoll() {
   home.style.display = "none";
   pizza.style.display = "none";
   seti.style.display = "none";
   wok.style.display = "none";
   roll.style.display = "block"
   sushi.style.display = "none"
   salati.style.display = "none"
   bigmenuPhone.style.display = "none"


}


function OpenSushi() {
   home.style.display = "none";
   pizza.style.display = "none";
   seti.style.display = "none";
   wok.style.display = "none";
   roll.style.display = "none"
   salati.style.display = "none"
   sushi.style.display = "block"
   bigmenuPhone.style.display = "none"

}

function OpenSalati() {
   home.style.display = "none";
   pizza.style.display = "none";
   seti.style.display = "none";
   wok.style.display = "none";
   roll.style.display = "none"
   sushi.style.display = "none"
   salati.style.display = "block"
   bigmenuPhone.style.display = "none"

}

function openMenu() {
      bigmenuPhone.style.display = "block"
      home.style.display = "none"
      pizza.style.display = "none";
      seti.style.display = "none";
      wok.style.display = "none";
      roll.style.display = "none"
      sushi.style.display = "none"
      salati.style.display = "none"
}

function otziv() {
    if(otziv.style.display == "none"){
      otziv.style.display = "block"
      home.style.display = "none"
      pizza.style.display = "none";
      seti.style.display = "none";
      wok.style.display = "none";
      roll.style.display = "none"
      sushi.style.display = "none"
      salati.style.display = "none"
      bigmenuPhone.style.display = "none"
   }else{
      otziv.style.display = "none"
   }
}

function openOtziv() {
   otziv.style.display = "block"
    home.style.display = "none";
   pizza.style.display = "none";
   seti.style.display = "none";
   wok.style.display = "none";
   roll.style.display = "none"
   sushi.style.display = "none"
   salati.style.display = "none"
   bigmenuPhone.style.display = "none"
}