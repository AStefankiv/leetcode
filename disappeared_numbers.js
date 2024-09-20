const nums = [4,3,2,7,8,2,3,1];
const sortedNums = nums.sort((a, b) => a - b);
const uniqueNums = [...new Set(sortedNums)];
console.log(uniqueNums); // [1, 2, 3, 4, 7, 8]
const disappearedNums = [];
for (let i = 1; i <= uniqueNums.length; i++) {
    if (!uniqueNums.includes(i)) {
        disappearedNums.push(i);
    }
}

console.log(disappearedNums); // [5, 6]