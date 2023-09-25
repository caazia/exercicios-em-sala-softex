function verificar() {
  try {
    let x = document.getElementById("valor").value;
    if (x == "") throw new TypeError("Campo vazio");
    if (isNaN(x)) throw new TypeError("Não é um número válido");
    if (x > 10) throw new TypeError("Número muito alto!");
    if (x < 5) throw new TypeError("Número muito baixo!");
    document.getElementById("msg").innerHTML = "Número aceito!";
  } catch (err) {
    document.getElementById("msg").innerHTML = "Erro: " + err + ".";
  } finally {
    document.getElementById("msgFinal").innerHTML =
      "Obrigado pela preferência!";
  }
}
