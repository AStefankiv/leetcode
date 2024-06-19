const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = date.getFullYear();

const formattedDate = `${monthsList[month]} - ${day} - ${year}`;
console.log(formattedDate);