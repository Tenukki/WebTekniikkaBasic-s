const kuva = document.getElementById("kuva")


//tehdään unkito mitä halutaan suorittaa eventissä
function paalla() {
 // document.getElementById('p').style.visibility = "visible";
  document.getElementsByTagName('p')[0].style.visibility = "visible";
}

function pois() {
  //document.getElementById('p').style.visibility = "hidden";
  document.getElementsByTagName('p')[0].style.visibility = "hidden";
}

kuva.addEventListener("mouseenter",paalla);
kuva.addEventListener("mouseleave",pois);