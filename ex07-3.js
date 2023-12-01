function BMI(){
  var takasa = Number(document.getElementById('takasa').value);
  var omosa = Number(document.getElementById('omosa').value);
  var BMI = omosa / (takasa * takasa); //BMIの計算
  alert('BMI値は' + BMI + 'です。');
}
