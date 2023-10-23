class Conta {
  constructor(agencia, conta, saldo, limite) {
    this._agencia = agencia;
    this._conta = conta;
    this._saldo = saldo;
    this._limite = limite;
  }

  Depositar(valor) {
    this._saldo += valor;
  }

  Sacar(valor) {
    this._saldo -= valor;
  }

  VerificarSaldo() {
    return this._saldo;
  }

  VerificarLimite() {
    return this._limite;
  }

  Transferencia(contaDestino, valor) {
    this._saldo -= valor;
    contaDestino.Depositar(valor);
    return contaDestino;
  }
}

Conta1 = new Conta(1234, 2334, 500, 500);
console.log(Conta1);

Conta1.Sacar(100);
console.log(Conta1.VerificarSaldo());
