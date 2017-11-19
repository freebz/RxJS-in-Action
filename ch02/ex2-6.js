Stream([1, 2, 3, 4, 5, 6])
    .buffer(2)
    .subscribe(console.log)); //-> [1, 2] [3, 4] [5, 6]
