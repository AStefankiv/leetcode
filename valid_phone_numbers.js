const fs = require('fs');

const phoneNums = './phone_nums.txt'

// fs.readFile(phoneNums, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

const readPhoneNums = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(data);
    }
  });
}

readPhoneNums(phoneNums);