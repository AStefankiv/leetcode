//implementStackQueues.js
function containsNearbyDuplicate(nums, k) {
  // Initialize an empty Set to store the elements within the window
  const seen = new Set();
  
  for (let i = 0; i < nums.length; i++) {
      // If the current element is already in the set, we found a duplicate within k distance
      if (seen.has(nums[i])) {
          return true;
      }
      
      // Add the current element to the set
      seen.add(nums[i]);
      
      // If the size of the set exceeds k, remove the oldest element to maintain the window size
      if (seen.size > k) {
          seen.delete(nums[i - k]);
      }
  }
  
  // If no duplicates are found within k distance, return false
  return false;
}