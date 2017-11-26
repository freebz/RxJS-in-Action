let tick = 0;
setInterval(() => {
    document.querySelector('#ticker').innerHTML = `${tick}`;
    tick++;
}, 1000);
