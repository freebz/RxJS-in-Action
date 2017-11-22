// Listing 3.7  Using aggregate operators

const Rx = require('rxjs');

let candidates = [
    {name: 'Brendan Eich', experience: 'JavaScript Inventor'},
    {name: 'Emmet Brown', experience: 'Historian'},
    {name: 'George Lucas', experience: 'Sci-fi writer'},
    {name: 'Alberto Perez', experience: 'Zumba Instructor'},
    {name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
];


Rx.Observable.from(candidates)
    .pluck('experience')
    .take(2)
    .do(val => console.log(`Visiting ${val}`))
    .subscribe(); // prints "Visiting JavaScript Guru"
                  //        "Visiting Historian"
