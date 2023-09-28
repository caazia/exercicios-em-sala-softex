let listaNomes = Array()

listaNomes['a'] = 'José';
listaNomes[10] = 'Maria';
listaNomes['seila'] = 'Fernanda';
listaNomes[true] = 'Renata';
listaNomes[false] = 'Diana';

console.log(listaNomes);

for (let cont in listaNomes) {
    console.log('Indice ' + cont + ' valor é: ' + listaNomes[cont])
}
