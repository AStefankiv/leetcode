<template>
  <div class="container p-0">
    <div class="d-flex">
       <div class="card main-div w-100">
          <div class="p-3">
          <h2 class="mb-1 day">{{ dayName }}</h2>
          <p class="text-light date mb-0">{{date}}</p>
          <small>{{time}}</small>
          <h2 class="place"><i class="fa fa-location">{{ name }}<small>{{country}}</small></i></h2>
          <div class="temp">
            <h1 class="weather-temp">{{ Math.round(temperature) }}°C</h1>
            <h2 class="text-light">{{ description }} <img :src="iconUrl" alt="icon" /></h2>
          </div>
        </div>
      </div>
      <div class="card card-2 w-100">
      <table class="m-4">
        <tbody>
          <tr>
            <th>Sea Level</th>
            <td>{{ sea_level }} m </td>
          </tr>
          <tr>
            <th>Wind</th>
            <td>{{ wind }}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{{ country }}</td>
          </tr>
          <tr>
            <th>Humidity</th>
            <td>{{ humidity }}</td>
          </tr>
        </tbody>
      </table>

      <DaysWeather></DaysWeather>

      <div id="div_Form" class="d-flex m-3 justify-content-center">
        <form action="">
          <input type="button" value="Change Location" class="btn change-btn btn-primary">
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import DaysWeather from './DaysWeather.vue';
import axios from 'axios';

export default {
  name: 'myWeather',
  components: {
    DaysWeather,
  },
  props: {
    city: String,
  },
  data () {
    return {
      temperature: null,
      description: null,
      iconUrl: null,
      date: null,
      time: null,
      name: null,
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      sea_level: null,
      wind: null,
      country: null,
      humidity: null,
    }
  },
  async created () {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=5d03de9143d8f66e4da9cd4ff4be7cfc`);
    const weatherData = response.data;
    this.temperature = weatherData.main.temp;
    this.description = weatherData.weather[0].description;
    this.name = weatherData.name;
    this.iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const d = new Date();
    this.date = d.getDate() + ' ' + (this.monthNames[d.getMonth()]) + ' ' + d.getFullYear();
    const seconds = () => {
      if (d.getSeconds() < 10) {
        return '0' + d.getSeconds();
      }
      return d.getSeconds();
    }
    this.time = d.getHours() + ':' + d.getMinutes() + ':' + seconds();
    this.dayName = this.dayNames[d.getDay()];
    this.sea_level = weatherData.main.sea_level;
    this.wind = weatherData.wind.speed;
    this.country = weatherData.sys.country;
    this.humidity = weatherData.main.humidity;
    console.log(weatherData);
  }
}

</script>

<style scoped>
body {
  background-color: #343d4b;
}

.weather-temp {
  margin: 0;
  font-weight: 700;
  font-size:4em;
}

h2.mb-1.day {
  font-size: 3rem;
  font-weight: 400;
}

.main-div {
  border-radius: 20px;
  color: #fff;
  background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
}

.temp {
  position: absolute;
  bottom: 0;
}

.main-div:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  z-index: 1;
}

.card-2 {
  background-color: #212730;
  border-radius: 20px;
}

.card-details {
  margin-left: 19px;
}

.h1_left {
  position: absolute;
  bottom: 25px;
  left: 16px;
  font-size: 3vw;
  line-height: 1.2;
}

.h3_left {
  position: absolute;
  left: 16px;
  font-size: 2vw;
  line-height: 0.5;
}

.h3_left small {
  font-size: 1 rem;
}

table {
  position: relative;
  left: 15px;
  border-collapse: separate;
  border-spacing: 15px;
  width: 85%;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

th,
td {
  font-size: 18px;
  color: #fff;
}

td {
  text-align: right;
}

table,
tr:hover {
  color: red;
}

.change-btn {
  background-image: linear-gradient(to right, cyan, magenta);
}

.change_btn:hover {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}

</style>