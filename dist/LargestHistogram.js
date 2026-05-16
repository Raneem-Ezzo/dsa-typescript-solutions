export function largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = []; // Stores indices
    const h = [...heights, 0]; // Add a zero at the end to flush the stack
    for (let i = 0; i < h.length; i++) {
        while (stack.length > 0 && h[stack[stack.length - 1]] >= h[i]) {
            const height = h[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}
