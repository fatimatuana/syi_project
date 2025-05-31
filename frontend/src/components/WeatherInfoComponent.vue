<!-- eslint-disable -->
<template>
    <div class="weather-info">
        <div>
          <div class="d-flex justify-center align-center justify-space-between" >
           <span class="--big">{{ weatherData.temperature }}°C</span>
            <span class="material-icons">wb_sunny</span>
          </div>
        <p>{{ weatherData.location }}</p>
        <p>Condition: {{ weatherData.condition }}</p>
        <p>Location: {{ location }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "WeatherInfo",
  data() {
    return {
      weatherData: {}
    };
  },
  props: { // maybe i will use it as a prop ? 
    location: {
      type: String,
      default: "New York - as Property"
    }
  },
  methods: {
    getWeatherData() {
      // for now, i am just using static data
      this.weatherData = {
        location: "New York",
        temperature: 25,
        condition: "Sunny",
      };
    }
  },
  created() {
    this.getWeatherData();
  }
};
</script>

<style scoped>
.weather-info {
  text-align: center;
  color: #fafafa;
  background-color: lightseagreen;
  padding: 40px 5em;
  border-radius: 25px;
  display: inline-block;
  margin: 40px 20px;
}
</style>
