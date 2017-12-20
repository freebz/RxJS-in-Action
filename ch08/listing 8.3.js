// Listing 8.3  WebSocket client with RxJS

const Rx = require('rxjs');
const WebSocket = require('websocket').client;


const websocket = new WebSocket('ws://localhost:1337');

Rx.Observable.fromEvent(websocket, 'message')
    .map(msg => JSON.parse(msg.data))
    .pluck('msg')
    .subscribe(console.log);
