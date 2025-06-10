<template>
  <v-container>
    <Navbar />
    <div class="main">
      <WeatherInfo :weatherData="weatherData" />
      <QuoteComp />
      <MoodComponent @moodSelected="handleMoodSelected" />
    </div>
  </v-container>
</template>

<script>
/* eslint-disable */
import WeatherInfo from '@/components/WeatherInfoComponent.vue';
import MoodComponent from '@/components/MoodComponent.vue';
import QuoteComp from '@/components/QuoteComp.vue';

import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: "MainView",
  components: {
    WeatherInfo,
    MoodComponent,
    QuoteComp,
    Navbar
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
  methods: {
    async getUserId(){
      let res = await axios.get(`http://localhost:3000/auth/user/${localStorage.getItem('userEmail')}`);
      let userData = res.data;
      return userData.id;
    },
    async handleMoodSelected(mood) {
      let userId = await this.getUserId();
      await axios.post("http://localhost:3000/entries/add", {
        userId: userId,
        weather_status: this.weatherData.main,
        temperature: this.weatherData.temperature,
        mood: mood,
        entry_date: new Date().toISOString().split('T')[0], // Format date as YYYY-MM-DD
        location_name: this.weatherData.city,
        latitude: this.weatherData.latitude,
        longitude: this.weatherData.longitude,
      })
      .then(response => {
        this.$router.push('/history'); // Redirect to history after adding entry
      })
      .catch(error => {
        console.error("Error adding entry:", error);
      });
    }
  }
};
</script>
<style scoped>
.main {
  padding: 20px;
  height: 85vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
}
</style>