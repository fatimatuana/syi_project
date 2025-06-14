<template>
  <v-container>
    <Navbar />
    <!-- eslint-disable -->
    <div class="main-screen d-flex flex-column align-center justify-center">
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8" md="6">
          <h1 class="text-center">Get your daily dose of <span class="font--logo">My Daily Companion</span> !</h1>
          <p class="text-center">Your personal assistant for daily motivation and mood tracking.</p>
        </v-col>
      </v-row>

    <button @click="getLocation" v-show="!showInput" class="btn-primary mt-5">Get Started!</button>

    <a v-show="!showInput" @click="showInput = true" class="--detail mt-3">or enter your city manually</a>
    <div v-show="showInput" class="location-input mt-3">
      <input v-model="inputcity" placeholder="Enter your city" />
      <button @click="getWeatherByCity(inputcity)" class="btn-primary mt-1">Get Started!</button>
      <a v-show="showInput" @click="showInput = false" class="--detail mt-3">or <span>use current location</span></a>
    </div>

  </div>  
</v-container>

</template>

<script>
/* eslint-disable */
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      inputcity: "",
      showInput: false,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            this.getWeather(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    async getWeather(latitude, longitude) {
      try {
        let res = await axios.get(`${process.env.BAPP_API_URL || 'http://localhost:3000'}/weather/location`, {
          params: {
            lat: latitude,
            lon: longitude
          }
        });
        if (res.status !== 200) {
          console.error("Failed to fetch weather data:", res.statusText);
          return;
        }
        let data = res.data;
        this.$router.push({
          path: '/main',
          query: { weather: JSON.stringify(data) }
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    async getWeatherByCity(city) {
      if (!city) {
        console.error("City name is required to fetch weather data.");
        return;
      }
      try {
        let res = await axios.get(`${process.env.BAPP_API_URL || 'http://localhost:3000'}/weather/city`, {
          params: {
            city: city
          }
        });
        if (res.status !== 200) {
          console.error("Failed to fetch weather data:", res.statusText);
          return;
        }
        let data = res.data;
        this.$router.push({
          path: '/main',
          query: { weather: JSON.stringify(data) }
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>
<style scoped>
.main-screen {
    padding: 20px;
    height: 85vh;
    display: flex;
    align-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
}
.location-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
}
</style>

