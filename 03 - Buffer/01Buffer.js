const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(4);
// console.log(buf)

const buf1 = Buffer.from('Samim')

// console.log(buf1)
// console.log(buf1.toString())

const buf3 = Buffer.from('Samim')
console.log(buf3)
console.log(buf3[1])
buf3[1] = 74; // change the value 
console.log(buf3[1])
console.log(buf3.toString())


