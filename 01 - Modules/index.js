const fs = require('node:fs');

const content = fs.readFileSync('node.txt', 'utf-8') // read file content
console.log(content);

fs.writeFileSync('copy.txt', 'hey', 'utf-8'); // create file and write hey alwasy remove previou content 

fs.appendFileSync('copy.txt', '\n\nhey', 'utf-8') // this also create file and not remove previous content 

fs.mkdirSync('games/syz/a', {recursive: true}); // create folder and recursive true  means create the complete folder strucute

fs.rmdirSync('games') // remove dir

fs.unlinkSync('copy.txt') // delete the file