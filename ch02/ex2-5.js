const stream = Stream(R, x, J, S)[Symbol.iterator]();

for(let keyEvent of stream) {
    console.log(event.keyCode);
}
//-> 82, 120, 74, 83
