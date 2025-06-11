<!-- eslint-disable -->
<template>
  <v-container>
    <Navbar />
    <div class="history-container">
      <h1 class="--medium">My Mood & Weather Journal</h1>
      <table class="responsive-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Mood</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in entries" :key="item.entry_date">
            <td data-label="Date">{{ item.entry_date }}</td>
            <td data-label="Location">{{ item.location_name }}</td>
            <td data-label="Weather">{{ item.weather_status }}</td>
            <td data-label="Temperature">{{ item.temperature }}°C</td>
            <td data-label="Mood">
              <span class="material-icons">sentiment_{{ item.mood }}</span>
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.responsive-table {
  width: 85vw;
  border-collapse: collapse;
  margin-top: 20px;
}

.responsive-table th,
.responsive-table td {
  padding: 12px;
  border: 1px solid rgb(230 230 230 / 30%);
  text-align: left;
}

.material-icons {
  font-size: 24px;
}

/* Responsive: collapse rows into stacked cards */
@media (max-width: 768px) {
  .responsive-table thead {
    display: none;
  }

  .responsive-table,
  .responsive-table tbody,
  .responsive-table tr,
  .responsive-table td {
    display: block;
    width: 100%;
  }

  .responsive-table tr {
    margin-bottom: 1rem;
    padding: 10px;
    border-radius: 10px;
  }

  .responsive-table td {
    text-align: right;
    position: relative;
    padding-left: 50%;
    box-sizing: border-box;
  }

  .responsive-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    top: 12px;
    font-weight: bold;
    text-align: left;
    white-space: nowrap;
  }
}
</style>
