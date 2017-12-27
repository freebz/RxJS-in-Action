const ajax = url => new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url);
    req.onload = () => {
	if(req.status == 200) {
	    let data = JSON.parse(req.responseText);
	    resolve(data);
	}
	else {
	    reject(new Error(req.statusText));
	}
    };
    req.onerror = () => {
	reject(new Error('IO Error'));
    };
    req.send();
});



chai.use(chaiAsPromised);
const should = chai.should();
