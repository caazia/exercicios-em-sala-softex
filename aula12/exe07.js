function salario(horaNormal, horaExtra) {
  let salarioNormal = horaNormal * 10;
  let salarioExtra = horaExtra * 15;

  return salarioNormal + salarioExtra;
}

console.log(salario(2, 5));
