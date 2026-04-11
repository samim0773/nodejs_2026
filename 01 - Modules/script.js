const fs = require('node:fs')

console.log('start the content reading')
//  [sync] = blocking operations
// const content = fs.readFileSync('note.txt', 'utf-8')
// console.log('content:', content)


//  non blocking operation 
fs.readFile('note.txt', 'utf-8', function (error, data) {
    if (error) console.log(error)
    else {
        console.log(data)
    }
})
console.log('End content reading ')



