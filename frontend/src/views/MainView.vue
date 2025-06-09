<template>
  <div class="main">
    <WeatherInfo :weatherData="weatherData" />
    <QuoteComp />
    <MoodComponent />
  </div>
</template>

<script>
/* eslint-disable */
import WeatherInfo from '@/components/WeatherInfoComponent.vue';
import MoodComponent from '@/components/MoodComponent.vue';
import QuoteComp from '@/components/QuoteComp.vue';

export default {
  name: "MainView",
  components: {
    WeatherInfo,
    MoodComponent,
    QuoteComp
  },
  data() {
    return {
      weatherData: {}      
    };
  },
  created() {
    const data = JSON.parse(this.$route.query.weather);
    this.weatherData = data;
  },
};
</script>
<style scoped>
.main {
  padding: 20px;
  height: 90vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
}
</style>