const input = 6;

function Sum(array) {
  let soma = 0;
  for (i = 0; i < input; i++) {
    soma += parseInt(array[i]);
  }
  return soma;
}

function GetUserInput() {
  let array = [];

  for (i = 0; i < input; i++) {
    array[i] = prompt("Informe o valor: ");
  }
  let soma = Sum(array);
  return soma;
}

let a = "O resultado da soma é: " + GetUserInput();
console.log(soma);
