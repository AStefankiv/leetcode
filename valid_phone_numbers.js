const fs = require('fs');

const phoneNums = './phone_nums.txt'

const readPhoneNums = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      if (data) {
        const phoneNumbers = data.split('\n');
        for (let i = 0; i < phoneNumbers.length; i++) {
          if (phoneNumbers[i].match(/^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}\r?$/)) {
            console.log(phoneNumbers[i]);
          } else {
            console.log('Invalid phone number');
          }
        }
      }
    }
  }
)}

readPhoneNums(phoneNums);