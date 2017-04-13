var inputs = [];
var sum = 0;
var avg = 0;
function addNumbers(event) {
  var formNumbers = document.mathForm.formNumbers.value;
  var numbers = Number(formNumbers);
  if(!isNaN(numbers))  {
    inputs.push(numbers);
    sum += numbers;
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

document.getElementById("mathForm")
