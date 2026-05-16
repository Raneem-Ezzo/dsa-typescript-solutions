export function canJump(nums: number[]): boolean {
    let reachable = 0; // The furthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        // If current index is beyond reachable, we are stuck
        if (i > reachable) return false;

        // Update reachable to the maximum of itself or (current index + jump value)
        reachable = Math.max(reachable, i + nums[i]!);

        // If we can already reach the last index, return true
        if (reachable >= nums.length - 1) return true;
    }

    return true;
}

// Test Case
console.log("Jump Game Result:", canJump([2, 3, 1, 1, 4])); // true
