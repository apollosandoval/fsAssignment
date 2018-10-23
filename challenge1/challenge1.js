const fs = require('fs');
const path = require('path');

const myPath = path.join(__dirname, 'info.txt')

fs.readFile(myPath, 'utf8', (err, data) => {
    if (err) {
        throw new Error(err.textStatus);
    }
    console.log(data);
})