var inputs = [];
var sum = 0;
var avg = 0;
var string = 0;
var count = 0;
var amountaccum = "";
function addNumbers(event) {
  var textarea = $('#formNumbers').val();
  console.log(textarea);
  var numbers = Number(textarea);
  if(!isNaN(numbers))  {
    inputs.push(numbers);
    sum += numbers;
    avg = sum/inputs.length;
    count++;
    console.log(inputs);
    console.log(sum);
    console.log(avg);  
    console.log(count);
    $("#counting").html(count);
    $("#sums").html(sum);
    $("#avg").html(avg);
   
  } else {
    inputs.push(textarea);
    $("#string").html(inputs.length);
    console.log(inputs.length);
    amountaccum = amountaccum + textarea;
    console.log(amountaccum);
    $("#amountaccum").html(amountaccum);
    
    
  }
  
  event.preventDefault();
}

//document.getElementById("reset").reset();
