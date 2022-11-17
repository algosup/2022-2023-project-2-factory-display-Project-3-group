document.getElementById('start2').innerHTML = 'Ecran2';

setTimeout(function() {
  document.getElementById('start2').innerHTML = '';
}, 10000);

 //reload page
  setTimeout(function() {
  window.location.reload(1);
}, 10000); 



