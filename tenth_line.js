const fs = require('fs');

const readLines = (file, lineNum) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      if (data) {
        const lines = data.split('\n');
        console.log(lines[lineNum - 1]);
      }
    }
  }
)}

readLines('./lines.txt', 10);