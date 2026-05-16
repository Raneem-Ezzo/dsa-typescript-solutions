export function cutRod(price: number[], n: number): number {
    // dp[i] will store the maximum profit for a rod of length i
    const dp: number[] = new Array(n + 1).fill(0);

    // Build the table in bottom-up manner
    for (let i = 1; i <= n; i++) {
        let maxVal = -Infinity;
        
        for (let j = 1; j <= i; j++) {
            // Compare current max with (price of piece j + max profit of remaining length i-j)
            // Note: price index j is used as length
            maxVal = Math.max(maxVal, price[j]! + dp[i - j]!);
        }
        dp[i] = maxVal;
    }

    return dp[n]!;
}

// Test Case
const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20]; // price[0] is always 0
const rodLength = 8;
console.log("Max Rod Cutting Profit:", cutRod(prices, rodLength)); // Should output 22
