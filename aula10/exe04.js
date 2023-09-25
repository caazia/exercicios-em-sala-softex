function getArray(array) {
    let auxiliar = []

    for(i=0; i < array.length; i++) {
        if(array[i] > 0) {
            auxiliar.push(array[i])
        }
    }
    return auxiliar;
}

function getArray2(array) {
    let auxiliar = []
    for (const i in array) {
        if(array[i] > 0)
        auxiliar.push(array[i])
    }

    return auxiliar;
}

function getArray3(array) {
    for(const key in array) {
        if(array[key] <= 0) {
            array.splice(key,1)
        }

    }
    return array;
}

function getArray4(array) {
    let auxiliar = []

    array.forEach(element => {
        if(element>0)
        auxiliar.push(element)
    });
    return auxiliar;
}

let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1, 25];

console.log(getArray2(array));