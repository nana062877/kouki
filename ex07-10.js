function BMI2(){
  var takasa2 = Number(document.getElementById('takasa2').value);
  var omosa2 = Number(document.getElementById('omosa2').value);
  var BMI2 = omosa / (takasa2 * takasa2); //BMIの計算

  if(BMI2 < 18.5){
  alert('低体重');
  }else if(BMI2 < 25){
    alert('普通');
    }else{
    alert('肥満');
  }
}
