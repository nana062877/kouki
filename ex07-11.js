function nenn(){
  var tosi = Number(document.getElementById('tosi').value);
  var tosss;

if((tosi % 4 == 0 && tosi % 100 != 0 )|| tosi % 400 ==0){ //4で割れるか100で割れなくて400で割れるなら進む
  tosss = '閏年';
}else{
  tosss = '平年';
}
  alert(tosi + '年は' + tosss + 'です。');
}


/*
if(tosi % 4 ==0 || tosi % 100 != 0 && tosi % 400 ==0){
  to = '閏年';
}else{
  to = '平年';
}

if(tosi % 400){
  to = '閏年';
}else if(tosi % 100){
  to = '平年';
}else if(tosi % 4){
  to = '閏年';
}
↑どうあがいたって閏年×２*/
