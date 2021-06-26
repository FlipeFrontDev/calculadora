function insertValues(num) {

  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input + num

  /* console.log(input); */

};

function calculate() {

  const input = document.getElementById('input-value').value

  document.getElementById('input-value').value = eval(input);

}

function clearInput() {

  document.getElementById('input-value').value = "";

}

function invertValue() {

  calculate();

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input * -1;

}

let clicks = 0;

function percent() {
  clicks++;

  console.log(clicks);

  const input = document.getElementById('input-value').value;
  let  result = document.getElementById('input-value').value = (input * 0.01);
}