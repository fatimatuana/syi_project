<!-- eslint-disable -->
<template>
    <v-container>
      <Navbar />
        <div class="history-container">
        <table>
        <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Location</th>
            <th class="text-left">Weather</th>
            <th class="text-left">Temperature</th>
            <th class="text-left">Mood</th>
        </tr>
        <tbody>
        <tr v-for="item in entries" :key="item">
            <td>{{ item.entry_date }}</td>
            <td>{{ item.location_name }}</td>
            <td>{{ item.weather_status }}</td>
            <td>{{ item.temperature }}°C</td>
            <td>
            <span class="material-icons">
                sentiment_{{ item.mood }}
            </span>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    </v-container>
</template>

<script>
/* eslint-disable */
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: "MainView",
  components: {
    Navbar
  },
  data() {
    return {
      entries: []      
    };
  },
  async created() {
    await this.getUserEntries();
  },
  methods: {
    async getUserEntries(){
      let userId = await this.getUserId();
      let res = await axios.get(`http://localhost:3000/entries/${userId}`);
      this.entries = res.data.map(entry => ({
        entry_date: entry.entry_date.split('T')[0], //date as YYYY-MM-DD
        location_name: entry.location_name,
        temperature: entry.temperature,
        weather_status: entry.weather_status,
        mood: entry.mood,
      }));
      console.log("User entries:", this.entries);
    },
    async getUserId(){
        let res = await axios.get(`http://localhost:3000/auth/user/${localStorage.getItem('userEmail')}`);
        let userData = res.data;
        return userData.id;
    },
  }
};

</script>
<style scoped>
.history-container {
  padding: 20px;
  height: 80vh;
  max-height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
}
td{
    padding: 10px 30px;
}
.tr{
    display: flex;
    justify-content: space-around;
    min-width: 80vw;
    flex-direction: column;
}
.material-icons {
    font-size: 24px;
    vertical-align: middle;
}
</style>