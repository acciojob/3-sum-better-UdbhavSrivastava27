function threeSumClosest(nums, target) {
  // Sort the array in ascending order
nums.sort((a, b) => a - b);

  const n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three numbers

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Adjust the pointers based on the sum
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Early return if the sum is equal to the target
        return closestSum;
      }
    }
  }

  return closestSum;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;

const closestSum = threeSumClosest(nums, target);
console.log(closestSum);  // Output: 2 (since the sum closest to 1 is 2)

  
}

module.exports = threeSum;
