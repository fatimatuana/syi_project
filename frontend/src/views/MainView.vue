<template>
  <div class="main">
    <WeatherInfo />
    <MoodComponent />
  </div>
</template>

<script>
/* eslint-disable */
import WeatherInfo from '@/components/WeatherInfoComponent.vue';
import MoodComponent from '@/components/MoodComponent.vue';
export default {
  name: "MainView",
  components: {
    WeatherInfo,
    MoodComponent,
  },
};
</script>
<style scoped>
.main {
  padding: 20px;
}
</style>