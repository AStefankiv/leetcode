const totalMarks = (array) => {
    const totalMark = array.reduce((acc, curr) => acc + curr, 0);
    const averageMark = totalMark / array.length;
    if (averageMark > 89 && averageMark <= 100) {
        return 'A';
    } else if (averageMark > 79 && averageMark <= 89) {
        return 'B';
    } else {
        return 'C';
    }
}

console.log(totalMarks([88, 90, 95]));// A
console.log(totalMarks([50, 60, 70]));// C
console.log(totalMarks([90, 90, 60]));// B