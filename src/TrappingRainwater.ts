export function trap(height: number[]): number {
    let totalWater = 0;
    const n = height.length;
    
    if (n === 0) return 0;

    // Initialize arrays with 0 to satisfy TypeScript
    const leftMax: number[] = new Array(n).fill(0);
    const rightMax: number[] = new Array(n).fill(0);

    // Fill leftMax array
    leftMax[0] = height[0]!;
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i]!, leftMax[i - 1]!);
    }

    // Fill rightMax array
    rightMax[n - 1] = height[n - 1]!;
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i]!, rightMax[i + 1]!);
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        const minWall = Math.min(leftMax[i]!, rightMax[i]!);
        totalWater += minWall - height[i]!;
    }

    return totalWater;
}

// --- Test Case (Matching the image) ---
const buildingHeights = [3, 0, 1, 0, 4, 0, 2];
const result = trap(buildingHeights);

console.log("Total Trapped Water Amount:");
console.log(result); 
