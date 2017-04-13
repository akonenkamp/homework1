var inputs = [];
var sum = 0;
var avg = 0;
function addNumber(event) {
  var formNumber = document.mathForm.formNumber.value;
  var number = Number(formNumber);
  if(!isNaN(number))  {
    inputs.push(number);
    sum += number;
    avg = sum/inputs.length;
    document.getElementById("counting").innerHTML = inputs.length;
    document.getElementById("sums").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;
    console.log(inputs);
    console.log(sum);
    console.log(avg);  
  }
  event.preventDefault();
}


