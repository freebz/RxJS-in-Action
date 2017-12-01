const source = [1, 2, 3];

source.map(value =>
	   Array(value).fill(value));
//-> [[1], [2,2], [3,3,3]]

source.map(value => Array(value).fill(value)).concatAll();
//-> [1,2,2,3,3,3]
