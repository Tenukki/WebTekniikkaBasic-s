
const otsikko = document.getElementById('otsikko');
const th = document.createElement('th');
th.innerText = "Puhelin-numero";
//luo node
otsikko.appendChild(th);




const tiedot = document.getElementById('tiedot');
const thTiedot = document.createElement('td');
thTiedot.innerText = "0400675483";
tiedot.appendChild(thTiedot);

otsikko.removeChild(document.getElementById('nikki'));
tiedot.removeChild(document.getElementById('nikkiTieto'));