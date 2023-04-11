document.getElementById('button').addEventListener('click', function(){ //Add Event click buttton
    const weight = document.getElementById('weight').value; //Take input value weight
    const height = document.getElementById('height').value; //Take input value height
    const result = Number(weight)/(Number(height)/100)**2 //Formula for BMI
    
    // console.log(result);

    document.getElementById('number-result').innerText = result.toFixed(1); //Print calculation result BMI formula 

    if(result < 18.5){ //Conditional for description BMI result
        document.getElementById('description-result').innerText = "Underweight"
    } else if(result <= 24.9){
        document.getElementById('description-result').innerText = "Normal"
    } else if(result <= 29.9){
        document.getElementById('description-result').innerText = "Overweight"
    } else{
        document.getElementById('description-result').innerText = "Obesity"
    }
});