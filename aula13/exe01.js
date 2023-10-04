let array = [10, 3, 15];

array.sort(function(a, b) {
    return a - b
}
)
console.log(array);

let fruts = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruts[0].localeCompare(fruts[0]))
console.log(fruts[0].localeCompare(fruts[1]))
console.log(fruts[0].localeCompare(fruts[2]))
fruts.sort();

console.log(fruts);

