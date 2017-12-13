// Listing 7.3  Promisified ajax()

const ajax = function (url) {
    return new Promise(function(resolve, reject) {
	let req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open('GET', url);
	req.onload = function() {
	    if(req.status == 200) {
		let data = JSON.parse(req.responseText);
		resolve(data);
	    }
	};
	req.onerror = function () {
	    reject(new Error('IO Error'));
	};
	req.send();
    });
};
