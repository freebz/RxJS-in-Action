Stream(loadMagazines('/subscriptions/magazines'))
    .filter(magazine => magazine.month === 'July')
    .subscribe(
	magazine => {
	    console.log(magazine.title);
	    //-> prints Dr. Dobbs "Composing Reactive Animations"
	}
    );
