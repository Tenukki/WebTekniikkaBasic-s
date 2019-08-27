const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  /*
  {
    //Muista sanoa ilpolle että nämä linkkit on rikki: SIksi käytin vain kahta kuvaa
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  */
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

for(let x = 0;x < pics.length;x++){
  //Luodaan string muuttuja jossa on HMTL teksti
  let kuva = '<li><img src='+pics[x].thumb+'></li>';

  const taulukko = document.getElementById('lista');
  taulukko.innerHTML += kuva;
}

function nayta(){
  const kuva = document.getElementsByClassName("kuva")[0];
  kuva.style.visibility = "visible"
  kuva.innerHTML = '<img src='+pics[0].big+'>';
}

function nayta1(){
  const kuva = document.getElementsByClassName("kuva")[0];
  kuva.style.visibility = "visible"
  kuva.innerHTML = '<img src='+pics[1].big+'>';
}

function toimii() {
  alert("Toimii");
}

//kun klikkaat pikku kuvaa hakee listan id ja listasta kaikki li tagiot ja sieltä sitten ekan [0]
//Lisää ensimmäiseen tagiin evenlistenerin
document.getElementById("lista").getElementsByTagName("li")[0].addEventListener('click',nayta);
document.getElementById("lista").getElementsByTagName("li")[1].addEventListener('click',nayta1);
