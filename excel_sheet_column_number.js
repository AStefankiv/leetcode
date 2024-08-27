const excel_sheet_column_number = (s) => {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result = result * 26 + (s.charCodeAt(i) - 64);
    }
    return result;
}

console.log(excel_sheet_column_number('A')); // 1
console.log(excel_sheet_column_number('B')); // 2
console.log(excel_sheet_column_number('AB')); // 28