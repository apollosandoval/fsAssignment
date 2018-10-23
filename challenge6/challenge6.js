const fs = require('fs');
const path = require('path');

let filenames = fs.readdir(__dirname, (err, data) => {
    if (err) {
        throw err;
    }
    for (let file in data) {
        if (data[file].search(/(txt)/ig) !== -1) {
            console.log(data[file]);
        }
    }
})
