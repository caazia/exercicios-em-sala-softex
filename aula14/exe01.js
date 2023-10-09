let temperatura = parseFloat(
  prompt("Digite a temperatura que você deseja converter: ")
);

let valores = parseInt(
  prompt(
    "Digite um numero para escolher qual sua conversão: /n1- de Celsius para Fahrenheit /n2- de Celsius para Kelvin /n3- de Fahrenheit para Celsius /n4- de Fahrenheit para Kelvin /n5- de Kelvin para Celsius /n6- de Kelvin para Fahrenheit /n0- Realizar um novo calculo"
  )
);

function converter() {
  if (valores == 1) {
    let paraFah = temperatura * 1.8 + 32;
    console.log("A sua temperatura em Fahrenheit é: " + paraFah);
  } else if (valores == 2) {
    let paraKe = temperatura + 273.15;
    console.log("A sua temperatura em Kelvin é: " + paraKe);
  } else if (valores == 3) {
    let paraCel = (temperatura - 32) / 1.8;
    console.log("A sua temperatura em Celsius é: " + paraCel);
  } else if (valores == 4) {
    let paraKe2 = temperatura * 1.8 + 32;
    console.log("A sua temperatura em Kelvin é: " + paraKe2);
  }
}
