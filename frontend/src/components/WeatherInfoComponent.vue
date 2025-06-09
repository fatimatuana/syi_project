<!-- eslint-disable -->
<template>
    <div class="weather-info" v-if="this.weatherData">
        <div>
          <div id="weather-info-header" >            
            <span class="material-icons">wb_sunny</span>
           <span class="--big mt-1">{{ Math.round(this.weatherData.temperature) }}°C</span>
        </div>
        <!-- <p>Weather: {{ this.weatherData.main }}</p> -->
        <p class="mt-3"><i>{{ this.weatherData.description }}</i></p>
        <p id="city" class="mt-3">{{ this.weatherData.city }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "WeatherInfo",
  props: { 
    weatherData: {
      type: Object,
      default: () => ({
        temperature: "love",
        description: "bright and beautiful",
        city: "somewhere",
        main: "always clear"
      })
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.weather-info {
  text-align: center;
  color: #fafafa;
  background-color: rgb(255 255 255 / 10%);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px 5em;
  border-radius: 25px;
  display: inline-block;
  margin: 40px 20px;
  min-width: 30vw;
}

#weather-info-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
p#city{
      margin-top: 3vh;
    /* font-size: 18px; */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
}
</style>
