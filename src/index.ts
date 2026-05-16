import { floodFill } from './FloodFill.js';
import { trap } from './TrappingRainwater.js';
import { climbStairs } from './ClimbingStairs.js';
import { canJump } from './JumpGame.js';
import { cutRod } from './RodCutting.js';

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
