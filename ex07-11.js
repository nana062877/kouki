function nenn(){
  var tosi = Number(document.getElementById('tosi').value);

if(tosi / 400){
  alert('閏年です。');
}else if(tosi / 100){
  alert('平年です。');
}
}
