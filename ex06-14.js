function hyoji14(){
 {document.getElementById('who14').innerHTML=
  '<img src="./image/nikkori.png" alt="笑顔">'
  ;}
}

 function hyoji14-2(){
  document.getElementById('who14').innerHTML=
    '<img src="./image/syobon.png" alt="悲しい">';
  //setTimeout()を含む関数を呼び込む
  setTimeout("hyoji14-2()",3000);}
