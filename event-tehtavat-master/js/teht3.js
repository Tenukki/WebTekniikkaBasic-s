


function summa() {
  var sana = document.getElementById("num1").value;
  var lista = sana.split(",")
  console.log(lista[1])

  var luku1 = parseFloat(lista[0]);
  var luku2 = parseFloat(lista[1]);

  var summa = luku1 + luku2;
  document.getElementById("vastaus").innerText = summa;
}

function vahennys() {
  var sana = document.getElementById("num1").value;
  var lista = sana.split(",")
  console.log(lista[1])

  var luku1 = parseFloat(lista[0]);
  var luku2 = parseFloat(lista[1]);

  var summa = luku1 - luku2;
  document.getElementById("vastaus").innerText = summa;
}

function jako() {
  var sana = document.getElementById("num1").value;
  var lista = sana.split(",")
  console.log(lista[1])

  var luku1 = parseFloat(lista[0]);
  var luku2 = parseFloat(lista[1]);

  var summa = luku1 / luku2;
  document.getElementById("vastaus").innerText = summa;
}

function tulo(){
  var sana = document.getElementById("num1").value;
  var lista = sana.split(",")
  console.log(lista[1])

  var luku1 = parseFloat(lista[0]);
  var luku2 = parseFloat(lista[1]);

  var summa = luku1 * luku2;
  document.getElementById("vastaus").innerText = summa;
}

document.getElementById("sum").addEventListener('click',summa);
document.getElementById("sub").addEventListener('click',vahennys);
document.getElementById("multi").addEventListener('click',tulo);
document.getElementById("div").addEventListener('click',jako);
