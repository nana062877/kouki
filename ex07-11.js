function nenn(){
  var tosi = Number(document.getElementById('tosi').value);


if(tosi /= 4 || tosi /= 100 && tosi /=400){
  alert('閏年です。');
 }else{
  alert('平年です。');
 }
}
