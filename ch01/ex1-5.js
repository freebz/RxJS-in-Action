Stream(42).subscribe(
    val => {
	console.log(val); //-> prints 42
    }
);



Stream(1, 2, 3, 4, 5).subscribe(
    val => {
	console.log(val);
    }
);
//-> 1
//   2
//   3
//   4
//   5



Stream([1, 2, 3, 4, ])
    .filter(num => (num % 2) == 0)
    .map(num => num * num)
    .subscribe(
	val => {
	    console.log(val);
	}
    );
//-> 4
//   16
