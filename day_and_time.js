const date = new Date();
const day = date.getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();


const day_and_time = () => {
  if (hour >= 12) {
    return `Today is ${days[day]} \nCurrent time is ${hour - 12}:${minute}:${second} PM`;
  }
  return `Today is ${days[day]} \nCurrent time is ${hour}:${minute}:${second} AM`;
}

console.log(day_and_time());