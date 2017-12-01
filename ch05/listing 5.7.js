// Listing 5.7  Streams needed to implement drag and drop with a mouse

const panel = document.querySelector('#dragTarget');

const mouseDown$ = Rx.Observable.fromEvent(panel, 'mousedown');
const mouseUp$ = Rx.Observable.fromEvent(document, 'mouseup');
const mouseMOve$ = Rx.Observable.fromEvent(document, 'mousemove');
