const lowest = arr => arr.sort().shift();



let source = [3, 1, 9, 8, 3, 7, 4, 6, 5];
let result = lowest(source); //-> 1
console.log(source); //-> [3, 3, 4, 5, 6, 7, 8, 9]
