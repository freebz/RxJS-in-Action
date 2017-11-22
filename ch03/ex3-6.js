let candidates = [
    {name: 'Brendan Eich', experience: 'Javascript Inventor'},
    {name: 'Emmet Brown', experience: 'Historian'},
    {name: 'George Lucas', experience: 'Sci-fi writer'},
    {name: 'Alberto Perez', experience: 'Zumba Instructor'},
    {name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
];


const Rx = require('rxjs');


Rx.Observable.from(candidates)
    .filter(candidate => {
	const bg = candidate.experience.toLowerCase();
	return bg.includes('javascript') || bg.includes('c++');
    })
    .reduce((acc, obj) => {
	acc.push(obj.name);
	return acc;
    }, [])
    .subscribe(console.log); //-> ["Brendan Eich", "Bjarne Stroustrup"]
