[[0, 1], [2, 3], [4, 5]].flatten(); //-> [0, 1, 2, 3, 4, 5]


[[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
}, []); //-> [0, 1, 2, 3, 4, 5]


R.flatten([[0, 1], [2, 3], [4, 5]]); //-> [0, 1, 2, 3, 4, 5]
