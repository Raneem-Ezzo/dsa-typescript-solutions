import { largestRectangleArea } from './LargestHistogram.js';
export function maximalRectangle(matrix) {
    if (matrix.length === 0)
        return 0;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    for (const row of matrix) {
        for (let i = 0; i < cols; i++) {
            // Update the height of the histogram for the current column
            heights[i] = row[i] === 1 || row[i] === "1" ? heights[i] + 1 : 0;
        }
        // Calculate max area for the histogram formed up to this row
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
}
