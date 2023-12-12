function nenn(){
  var tosi = Number(document.getElementById('tosi').value);

if(tosi /= 400){
  to = '閏年';
}else if(tosi /= 100){
  to = '平年';
}else if(tosi /= 4){
  to = '閏年';
}
  alert(tosi + '年は' + to + 'です。')
}
