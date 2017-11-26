// Listing 4.10  Dedicated debounce() method using vanilla JavaScript

const copyToArray = arrayLike => Array.prototype.slice.call(arrayLike);

function debounce(fn, time) {
    let timeoutId;
    return function() {
	const args = [fn, time]
	      .concat(copyToArray(arguments));
	clearTimeout(timeoutId);
	timeoutId = window.setTimeout.apply(window, args);
    }
}
