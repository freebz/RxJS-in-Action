try {
    someDangerousFunction();
}
catch (error) {
    // statements to handle any exceptions
    console.log(error.message);
}


try {
    const data$ = Rx.Observable.fromPromise(ajax('/data'))
	  .subscribe(console.log);
}
catch(error) {
    console.log(`Error processing stream: ${error.message}`);
}
