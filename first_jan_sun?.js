const date = new Date();
const year = date.getFullYear();
const day = date.getDay();
const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const firstJanSun = (yearStart, yearEnd) => {
  for (let i = yearStart; i <= yearEnd; i++) {
    const date = new Date(i, 0, 1);//i is the year, 0 is the month, 1 is the day
    if (date.getDay() === 0) {
      console.log(i);
    }
  }
}

firstJanSun(2014, 2050); // 2017, 2023, 2028, 2034, 2040, 2045