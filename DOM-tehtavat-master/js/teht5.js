
function kello() {
  var a = new Date();
  const p = document.getElementById('kello');
  p.innerText = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
}

const intervalli = setInterval(kello,1000);
