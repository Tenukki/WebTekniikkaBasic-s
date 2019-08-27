

function aloita() {
  let nimi = document.getElementById('hakuteksti').value;
  let sivu = 'http://api.tvmaze.com/search/shows?q='+nimi;
  console.log(sivu);

  fetch(sivu)
  .then(function(vastaus) {
    return vastaus.json();
  }).then(function(dataa) {
    console.log("alkaa")
    console.log(dataa)
    haku(dataa);
  }).catch(function(error) {
    console.log(error);
  });
}

function haku(data){
  const lista = document.getElementById('container');

  while (lista.hasChildNodes()){
    lista.removeChild(lista.firstChild);
  }
  for (let x = 0;x < data.length;x++){
    try {
      let nimi = data[x].show.name;
      let linkki = data[x].show.officialSite;
      let kuva = data[x].show.image.medium;
      let summary = data[x].show.summary;
      console.log(nimi);
      console.log(linkki);
      console.log(kuva);
      console.log(summary);

      const ul = document.createElement('ul');

      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      const li4 = document.createElement('li');

      li1.innerText = nimi;
      li2.innerText = linkki;
      li3.innerHTML = summary;
      li4.innerHTML = '<img src='+kuva+'>';

      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      document.getElementById('container').appendChild(ul);

    }catch (e) {
      console.log(e);
    }
  }

}

document.getElementById('hakunappi').addEventListener('click',aloita);

