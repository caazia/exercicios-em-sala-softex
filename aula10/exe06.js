/* primeiraNota = parseFloat(prompt("Qual a sua primeira nota? "));
segundaNota = parseFloat(prompt("Qual a sua segunda nota? "));
terceiraNota = parseFloat(prompt("Qual a sua terceira nota? "));
quartaNota = parseFloat(prompt("Qual a sua quarta nota? ")); 

faltas = parseInt(prompt("Qual o seu percentual de faltas?")); */

const formulario = document.getElementById("#formulario");
const btnenviar = document.getElementById("#btn-enviar");

function calcularMedia() {
  const primeiraNota = document.getElementById("#primeiraNota").value;
  const segundaNota = document.getElementById("#segundaNota").value;
  const terceiraNota = document.getElementById("#terceiraNota").value;
  const quartaNota = document.getElementById("#quartaNota").value;

  let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

  return media;
}

function mostrarValor() {
  const porcentagem = document.getElementById("#porcentagem");

  if (media >= 7 && media <= 10 && porcentagem <= 20) {
    console.log("Você está aprovado com a média: " + media);
  } else if (media < 7 && porcentagem <= 20) {
    console.log("Você está de recuperação, sua média foi de: " + media);
  } else if (media < 3 || porcentagem > 20) {
    console.log("Você está reprovado!");
  } else {
    console.log("Informação inválida, tente novamente.");
  }
}

document.getElementById(formulario).onkeypress;

document.getElementById(btnenviar).onclick = function (e) {
  e.preventDefault();
  mostrarValor();
};
