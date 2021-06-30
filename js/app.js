let calc = false;

/*Função de inserção de valores que apaga o display se uma nova operação estiver sendo iniciada*/

function insertValues(num) {

  /*Verifica se uma nova operação está sendo iniciada*/
  
  if (calc == true) {

    clearInput();
    calc = false;
  }

  /*Recebe os valores das entradas realizadas (cliques nos mumeros)*/

  const input = document.getElementById('input-value').value;

  document.getElementById('input-value').value = input + num

};

/*Função que inicia calculo após receber as entradas de valores e clicarmos no botão igual*/

function calculate() {

  /*indica que uma nova operação está sendo iniciada*/

  calc = true;

  /*Mostra o resultado da operação no display*/

  const input = document.getElementById('input-value').value

  document.getElementById('input-value').value = eval(input);

}

/*Função que limpa o display após a realização de uma nova operação*/

function clearInput() {

  /*define o elemento display como vaio ("")*/

  document.getElementById('input-value').value = "";

}

/*Função do botão de inversão de valores para positivo/ negativo*/

function invertValue() {

  /*Chama a função calculate para realizar calculo da empressão e só depois inverter o valor*/

  calculate();

  /*Apresenta o resultado da ação no display*/

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input * -1;

}

/*Função do botão percentual*/

function percent() {

  /*Apresenta o resultado no display*/

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = parseFloat((input * 0.01));
}