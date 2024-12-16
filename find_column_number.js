function convertToTitle(columnNumber) {
  let result = "";
  
  while (columnNumber > 0) {
      // Adjust for 1-based indexing in Excel columns
      columnNumber -= 1; 
      // Get the current character
      const char = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0));
      // Add the character to the result
      result = char + result;
      // Move to the next "digit"
      columnNumber = Math.floor(columnNumber / 26);
  }
  
  return result;
}

// Example usage:
console.log(convertToTitle(1));    // Output: "A"
console.log(convertToTitle(28));   // Output: "AB"
console.log(convertToTitle(701));  // Output: "ZY"