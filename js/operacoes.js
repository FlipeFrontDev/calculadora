let calc = false;

exports.insertValues =  function(num) {

  if (calc == true) {

    clearInput();
    calc = false;
  }

  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input + num

  /* console.log(input); */
  console.log(num);

};

exports.calculate = function() {

  calc = true;

  const input = document.getElementById('input-value').value

  document.getElementById('input-value').value = eval(input);

}

exports.clearInput = function() {

  document.getElementById('input-value').value = "";

}

exports.invertValue = function() {

  calculate();

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input * -1;

}

exports.percent = function() {
  /*   clicks++;
  
    console.log(clicks); */
  
    const input = document.getElementById('input-value').value;
    document.getElementById('input-value').value = parseFloat((input * 0.01));
  }