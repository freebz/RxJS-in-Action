let candidates = [
    {name: 'Brendan Eich', experience: 'Javascript Inventor'},
    {name: 'Emmet Brown', experience: 'Historian'},
    {name: 'George Lucas', experience: 'Sci-fi writer'},
    {name: 'Alberto Perez', experience: 'Zumba Instructor'},
    {name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
];


const Rx = require('rxjs');


const hasJsExperience = bg => bg.toLowerCase().includes('javascript');

const candidates$ = Rx.Observable.from(candidates);
candidates$
    .filter(candidate => hasJsExperience(candidate.experience)) //#A
    .subscribe(console.log); //-> prints "Brendan Eich"
