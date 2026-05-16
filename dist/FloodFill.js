export function floodFill(image, sr, sc, color) {
    // Check if the starting row exists to avoid undefined errors
    const startRow = image[sr];
    if (!startRow)
        return image;
    const originalColor = startRow[sc];
    // If original color is undefined or already equals the new color, return image
    if (originalColor === undefined || originalColor === color) {
        return image;
    }
    fill(image, sr, sc, originalColor, color);
    return image;
}
function fill(image, r, c, originalColor, newColor) {
    // Base case: Check boundaries and if the current pixel matches the original color
    if (r < 0 || r >= image.length ||
        (image[r] && (c < 0 || c >= image[r].length)) ||
        !image[r] || image[r][c] !== originalColor) {
        return;
    }
    // Update the color of the current pixel
    image[r][c] = newColor;
    // Recursive calls for the four directions (Up, Down, Left, Right)
    fill(image, r - 1, c, originalColor, newColor);
    fill(image, r + 1, c, originalColor, newColor);
    fill(image, r, c - 1, originalColor, newColor);
    fill(image, r, c + 1, originalColor, newColor);
}
// --- Test Case (4x4 Matrix matching the image) ---
const image4x4 = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 0]
];
console.log("Original 4x4 Image:");
console.table(image4x4);
// Execute Flood Fill starting from (1, 1) with new color 2
const updatedImage = floodFill(image4x4, 1, 1, 2);
console.log("Updated Image after Flood Fill:");
console.table(updatedImage);
