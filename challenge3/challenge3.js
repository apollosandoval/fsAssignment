const fs = require('fs');
const path = require('path');

const myPath = path.join(__dirname, 'binfo.txt');
const dest = path.join(__dirname, 'info.txt');

fs.copyFileSync(myPath, dest);
fs.unlinkSync(myPath);