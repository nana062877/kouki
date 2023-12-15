function nenn(){
  var tosi = Number(document.getElementById('tosi').value);

if(tosi % 4 ==0 || tosi % 100 != 0 && tosi % 400 ==0){
  to = '閏年';
}else{
  to = '平年';
}
  alert(tosi + '年は' + to + 'です。')
}
