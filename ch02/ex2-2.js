Stream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .filter(isEven)
    .map(square)
    .reduce(add)
    .subscribe(console.log);  //-> 220



['rxjs'].map(toUpper).map(slice(0, 2)).map(repeat(2)); //-> 'RXRX'



Stream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .filter(isEven)
    .map(square)
    .reduce(add);
