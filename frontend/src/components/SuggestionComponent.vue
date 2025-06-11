<!-- eslint-disable -->
<template>
    <div class="suggestion-comp">
        <p>☆ {{ suggestion }} ☆</p>
    </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "SuggestionComponent",
  data() {
    return {
      suggestion: "",
    };
  },
  props: {
    weather_condition: {
      type: String,
      required: true
    },
  },
  methods: {
    async getSuggestion() {
      let res = await axios.get(`http://localhost:3000/suggestions?weather=${this.weather_condition}`);
      if (res.status !== 200) {
        console.error("Failed to fetch suggestion:", res.statusText);
        this.suggestion = "Just relax and enjoy the weather!";
        return;
      }
      this.suggestion = res.data || "Just relax and enjoy the weather!";
    }
  },
  created() {
    this.getSuggestion();
  }
};
</script>

<style scoped>

</style>
