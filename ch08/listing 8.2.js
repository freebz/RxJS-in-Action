// Listing 8.2  Simple RxJS Node.js server

const Rx = require('rxjs/Rx');
const WebSocketServer = require('websocket').server;
const http = require('http');

// ws port
const server = http.createServer();
server.listen(1337);

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

Rx.Observable.fromEvent(wsServer, 'request')
    .map(request => request.accept(null, request.origin))
    .subscribe(connection => {
	connection.sendUTF(JSON.stringify({ msg: 'Hello Socket' }));
    });
