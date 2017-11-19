// Listing 2.2  Custom BufferIterator function

function BufferIterator(arr, bufferSize = 2) {
    this[Symbol.iterator] = function () {
	let nextIndex = 0;

	return {
	    next: () => {
		if(nextIndex >= arr.length) {
		    return {done: true};
		}
		else {
		    let buffer = new Array(bufferSize);
		    for(let i = 0; i < bufferSize; i++) {
			buffer[i] = (arr[nextIndex++]);
		    }
		    return {value: buffer, done: false};
		}
	    }
	}
    };
}
