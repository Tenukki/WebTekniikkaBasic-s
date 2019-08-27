const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for(let x = 0;x < kuvat.length;x++){
  //Luodaan string muuttuja jossa on HMTL teksti
  let kuva = "<li><img src="+kuvat[x]+"></li>";

  //Joka kierroksella luodaan uusi "li" elementti
  const li = document.createElement('li');

  //lisätään "li" elementin sisälle HTML koodi
  li.innerHTML = "<img src="+kuvat[x]+">";

  //Lisätään "li" elementti listaan. "li" elementti sisältää "img" tagin jossa on kuvan osoite
  document.getElementById('lista').appendChild(li);

}