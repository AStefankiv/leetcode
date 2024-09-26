<template>
  <div class="container p-0">
    <div class="d-flex">
      <div class="card main-div w-100">
        <div class="p-3">
          <h2 class="mb-1 day">Tuesday</h2>
          <p class="text-light date mb-0">date</p>
          <small>time</small>
          <h2 class="place"><i class="fa fa-location">Rio <small>country</small></i></h2>
          <div class="temp">
            <h1 class="weather-temp">19&deg;</h1>
            <h2 class="text-light">description</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-2 w-100">
      <table class="m-4">
        <tbody>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myWeather',
  props: {
    city: String
  }
}

</script>

<style>
</style>