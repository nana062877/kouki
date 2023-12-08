function nenn(){
  var tosi = Number(document.getElementById('tosi').value);

if(tosi / 400){
  alertr('閏年です。');
}else if(tosi / 100){
  alertr('平年です。');
}else if(tosi / 4){
  alertr('閏年です。');
}
}
