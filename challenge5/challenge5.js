const fs = require('fs');
const path = require('path');

const myFile = path.join(__dirname, 'info.txt');

let file = fs.readFileSync(myFile, 'utf8');

fs.writeFileSync(myFile, file.replace(/-/g, ' '));
