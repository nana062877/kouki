function BMI2(){
  var takasa2 = Number(document.getElementById('takasa2').value);
  var omosa2 = Number(document.getElementById('omosa2').value);
  var BMI2 = omosa2 / (takasa2 * takasa2); //BMIの計算

  var taikei
  if(BMI2 < 18.5){
  taikei = '低体重';
  }else if(BMI2 < 25){
    taikei = '普通';
    }else{
    taikei = '肥満';
  }
  alert('BMI値は' + BMI2 + 'です。これは' + taikei + '体系です。')
}
