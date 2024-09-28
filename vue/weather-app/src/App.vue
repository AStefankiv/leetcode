<template>
  <div class="app">
    <div class="header container h-100 p-5">
      <h1 class="mb-5">Weather App</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar w-50 mx-2">
          <input type="text" class="input form-control" v-model="city" placeholder="Enter a city" />
        </div>
        <button class="btn-search btn btn-primary" @click="searchWeather">Search <i class="fas fa-search"></i></button>
      </div>
      <p>You are searching for {{ city }}</p>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </div>
    <br>
    <Weather :city="city" v-if="showWeather && !errorMessage"></Weather>
  </div>
</template>

<script>
import axios from 'axios';
import Weather from './components/Weather.vue';

export default {
  name: 'App',
  components: {
    Weather
  },
  data() {
    return {
      city: '',
      showWeather: false,
      errorMessage: ''
    }
  },
  methods: {
    async searchWeather() {
      if (!this.city.trim()) {
        this.errorMessage = 'Please enter a city';
        this.showWeather = false;
        return;
      }
      
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=5d03de9143d8f66e4da9cd4ff4be7cfc&units=metric`);
        this.weatherData = response.data;
        this.errorMessage = '';
        this.showWeather = true;
        } catch (error) {
          if (error.response && error.response.status === 404) {
            this.errorMessage = 'City not found';
          } else {
            this.errorMessage = 'An error occurred';
          }
          this.showWeather = false;
          console.error('Error fetching weather data', error);
        }
      }
    }
}
</script>

<style>

body{
  background-color: #121212 !important;
}
.header {
  background: #212730;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 5rem;
}

.btn-search {
  background-image: linear-gradient(to right, cyan, magenta);
}

</style>