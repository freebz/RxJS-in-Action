const arr = [1, 2, 3, 4, 5, 6];

for(let i of new BufferIterator(arr, 2)) {
    console.log(i);
}
//-> [1, 2] [3, 4] [5, 6]

for(let i of new BufferIterator(arr, 3)) {
    console.log(i);
}
//-> [1, 2, 3] [4, 5, 6]
