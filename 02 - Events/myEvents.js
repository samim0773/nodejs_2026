const EventEmitter = require('node:events');

const envntEmitter = new EventEmitter();

// ------ define the  event --------
envntEmitter.on('greet', (name) => {
    console.log(`Hellow ${name} welcome to nodeJs event`);
});

envntEmitter.once('sendEmail', (name) => {
    console.log(`Hellow ${name} email send successfully`); // this event call only one time.
});

// ---- emit the event --------
envntEmitter.emit('greet', 'samim')
envntEmitter.emit('sendEmail', 'samim') // here we call sendEmail event two time but is console only one time because its call only one time. 
envntEmitter.emit('sendEmail', 'samim')
envntEmitter.emit('greet', 'samim')






