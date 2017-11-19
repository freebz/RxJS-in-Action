const EventEmitter = require('events');

class Calculator extends EventEmitter {}

const calc = new Calculator();

calc.addListener('add', (a, b) => {
    calc.emit('result', a + b);
});
calc.addListener('subtract', (a, b) => {
    calc.emit('result', a - b);
});

calc.addListener('result', (result) => {
    console.log('Result: ' + result);
});

calc.emit('add', 2, 3);      //-> Prints 'Result: 5'
calc.emit('subtract', 2, 3); //-> Prints 'Result: -1'
