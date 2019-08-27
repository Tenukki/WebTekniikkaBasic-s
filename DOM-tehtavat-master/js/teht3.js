const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for(let x = 0;x < kuvat.length;x++){
  //Luodaan string muuttuja jossa on HMTL teksti
  let kuva = '<li><img src='+kuvat[x]+'></li>';

  const taulukko = document.getElementById('lista');
  taulukko.innerHTML += kuva;
}