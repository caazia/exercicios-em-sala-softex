let dias = parseInt(prompt("Me informe quantos dias você irá trabalhar?"))

let valor = (30 * dias)
let valorASerPago = valor - (((valor*8) / 100));

console.log("O valor do seu salário será: " + valorASerPago);