const fs = require('node:fs');

exports.logger = (req, res, next) => {
    const date = new Date();
    const logData = `\n${date}  --  ${req.method} --  ${req.path}`;
    fs.appendFileSync('logs.txt', logData, 'utf-8')
    next();
}