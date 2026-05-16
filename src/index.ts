import { floodFill } from './FloodFill.js';
import { trap } from './TrappingRainwater.js';
import { climbStairs } from './ClimbingStairs.js';
import { canJump } from './JumpGame.js';
import { cutRod } from './RodCutting.js';
import { largestRectangleArea } from './LargestHistogram.js';
import { maximalRectangle } from './MaximalRectangle.js';


console.log("--- 1. Flood Fill ---");
const img = [[1,1,1],[1,1,0],[1,0,1]];
console.table(floodFill(img, 1, 1, 2));

console.log("\n--- 2. Trapping Rainwater ---");
console.log("Water Trapped:", trap([0,1,0,2,1,0,1,3,2,1,2,1]));

console.log("\n--- 3. Climbing Stairs ---");
console.log("Ways for 5 stairs:", climbStairs(5));

console.log("\n--- 4. Jump Game ---");
console.log("Can jump [2,3,1,1,4]?", canJump([2,3,1,1,4]));

console.log("\n--- 5. Rod Cutting ---");
console.log("Max Profit:", cutRod([0, 1, 5, 8, 9, 10, 17, 17, 20], 8));
// --- Problem 6: Largest Rectangle in Histogram ---
console.log("\n6. Largest Histogram Area:");
const histogram = [6, 2, 5, 4, 5, 1, 6];
console.log(largestRectangleArea(histogram)); // Expected: 12

// --- Problem 7: Maximal Rectangle in Matrix ---
console.log("\n7. Maximal Rectangle in 2D Matrix Area:");
const binaryMatrix = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
];
console.log(maximalRectangle(binaryMatrix)); // Expected: 8

