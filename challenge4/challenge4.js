const fs = require('fs');
const path = require('path');

const myFile = path.join(__dirname, 'info.txt');
const newPath = path.join(__dirname, 'copyfolder');

try {
    fs.mkdirSync(newPath);
}
catch {
    console.log('directory exists');
}
finally {
    fs.copyFileSync(myFile, path.join(newPath, 'info.txt'));
    fs.unlinkSync(myFile);
}