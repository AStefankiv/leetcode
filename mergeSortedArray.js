const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];


const m = 3;
const nums1Slice = nums1.slice(0, m);
const n = 3;
const nums2Slice = nums2.slice(0, n);
const merged = nums1Slice.concat(nums2Slice).sort((a, b) => a - b);


const merge = (nums1, m, nums2, n) => {
  const nums1Slice = nums1.slice(0, m);
  const nums2Slice = nums2.slice(0, n);
  const merged = nums1Slice.concat(nums2Slice).sort((a, b) => a - b);
  return merged;
}

console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]