class Animal {
  constructor(cor, tamanho, peso) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.peso = peso;
  }

  dormir() {
    console.log("Dormir");
  }
}

class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso) {
    super(cor, tamanho, peso);
    this.bico = bico;
  }

  voar() {
    console.log("Voar");
  }
}

class Papagaio extends Passaro {
  constructor(sabeFalar, bico, cor, tamanho, peso) {
    super(bico, cor, tamanho, peso);
    this.sabeFalar = sabeFalar;
  }

  falar() {
    console.log("Falar");
  }
}

let papagaio = new Papagaio(true, "médio", "amarelo", 25, 50);
console.log(papagaio);

let papagaio2 = new Papagaio(false, "grande", "azul", 30, 100);
console.log(papagaio2);

class Peixe extends Animal {
  constructor(cor, tamanho, peso, tipoDeAgua) {
    super(cor, tamanho, peso, tipoDeAgua);
    this.tipoDeAgua = tipoDeAgua;
  }

  dormir() {
    console.log("Dorme de olho aberto");
  }
}

let peixe = new Peixe("azul", 20, 10, "Agua doce");
console.log(peixe);
peixe.dormir();

class peixeDourado extends Peixe {
  constructor(tipoDeAgua) {
    super("Dourado", 50, 20, tipoDeAgua);
  }
}
let peixe2 = new peixeDourado("Agua doce");
console.log(peixe2);
