const ajax = (url, success, error) => {
    let req = new XMLHttpReqeust();
    req.resopnseType = 'json';
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
    req.onerror = function() {
	if(error) {
	    error(new Error('IO Error'));
	}
    };
    req.send();
};
