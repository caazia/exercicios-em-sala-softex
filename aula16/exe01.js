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
  constructor(sabeFalar, cor, tamanho, peso) {
    super("Medio", cor, tamanho, peso);
    this.sabeFalar = sabeFalar;
  }

  falar() {
    console.log("Falar");
  }
}

let papagaio = new Papagaio(true, "amarelo", 25, 50);
console.log(papagaio);

let papagaio2 = new Papagaio(false, "azul", 30, 100);
console.log(papagaio2);
