function BMI() {
    let height = document.getElementById('hei').value;
    let weight = document.getElementById('wid').value;
    let bmi = document.getElementById('bmiAnswer');
    
    let result = (weight / height / height) * 10000;
    bmi.innerHTML = result.toFixed(2)

}


