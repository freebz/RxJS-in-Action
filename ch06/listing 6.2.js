// Listing 6.2  SessionDisposable object implementing the dispose functionality

class SessionDisposable {
    constructor(sessionToken) {
	this.token = sessionToken;
	this.disposed = false;
	let expiration = moment().add(1, 'days').toDate();
	document.cookie = `session_token=${sessionToken};
	    expires=${expiration.toUTCString()}`;
	console.log('Session created: ' + this.token);
    }

    getToken() {
	return this.token;
    }

    unsubscribe() {
	if (!this.disposed) {
	    this.disposed = true;
	    this.token = null;
	    document.cookie = 'session_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
	    console.log('Ended session! This object has been disposed.');
	}
    }
}
