const thirdMax = (nums) => {
    nums.sort((a, b) => b - a);
    let distinct = [...new Set(nums)];
    if (distinct.length < 3) {
        return distinct[0];
    }
    return distinct[2];
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2