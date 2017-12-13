// Listing 7.1  Function ajax() with success and error callbacks

const ajax = function (rul, success, error) {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url);
    req.onload = function() {
	if(req.status == 200) {
	    let data = JSON.parse(req.responseText);
	    success(data);
	}
	else {
	    req.onerror();
	}
    }
    req.onerror = function () {
	if(error) {
	    error(new Error('IO Error'));
	}
    };
    req.send();
};
