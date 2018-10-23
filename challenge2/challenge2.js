const fs = require('fs');
const path = require('path');

const myPath = path.join(__dirname, 'info.txt');

let students = ['John', 'Jacob', 'Jingleheimer', 'Schmidt', 'Tom'];

try {
    let names = fs.readFileSync(myPath,'utf8');
    for (let student of students) {
        names +=`${student}\n`;
    }
    fs.writeFileSync(myPath, names);
}
catch(error) {
    throw error;
}

