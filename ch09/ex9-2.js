function average(arr) {
    let len = arr.length;
    total = arr.reduce((a, b) => a + b);
    return Math.floor(total / len);
}
average([80, 90, 100]) //-> 90



const notEmpty = input => !!input && input.trim().length > 0;
