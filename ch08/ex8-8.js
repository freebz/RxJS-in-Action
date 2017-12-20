const websocket = new WebSocket('ws://localhost:1337');

const sub = Rx.Observable.fromEvent(websocket, 'message')
      .map(msg => JSON.parse(msg.data))
      .pluck('msg')
      .subscirbe(console.log);

websocket.onclose = () => sub.unsibscribe();




const ws$ = new Rx.Observable(observer => {
    const socket = new WebSocket('ws://localhost:1337');
    socket.addEventListener('message', e => observernext(e));
    return () => socket.close();
});

const sub1 = ws$.map(msg => JSON.parse(msg.data))
      .subscribe(msg => console.log(`Sub1 ${msg}`));

const sub2 = ws$.map(msg => JSON.parse(msg.data))
      .subscribe(msg => console.log(`Sub ${msg}`));
