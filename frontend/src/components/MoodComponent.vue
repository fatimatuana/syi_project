<!-- eslint-disable -->

<template>
  <v-container>
    <div class="mood-icons">
      <span v-for="mood in moods"
        :key="mood.name"
        class="material-icons"
        :class="{ selected: selectedMood === mood.name }"
        @click="selectMood(mood.name)"
      >
        {{ mood.icon }}
      </span>
    </div>
    <button
      class="mt-5 btn-primary"
      :disabled="!selectedMood"
      color="primary"
      @click="sendMoodToAPI(selectedMood)"
    >
      save my mood
    </button>
    <!-- <p v-if="selectedMood" class="mt-2">
      You selected: {{ selectedMood.replace(/_/g, ' ') }}
    </p> -->
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "MoodSelector",
  data() {
    return {
      selectedMood: null,
      moods: [
        { name: "very_dissatisfied", icon: "sentiment_very_dissatisfied" },
        { name: "dissatisfied", icon: "sentiment_dissatisfied" },
        { name: "neutral", icon: "sentiment_neutral" },
        { name: "satisfied", icon: "sentiment_satisfied_alt" },
        { name: "very_satisfied", icon: "sentiment_very_satisfied" },
      ],
    };
  },
  methods: {
    selectMood(moodName) {
      this.selectedMood = moodName;
      // this.sendMoodToAPI(moodName);
    },
    async sendMoodToAPI(mood) {
      console.log("Sending mood to API:", mood);
        await axios.post("...not created rn", {
            mood: this.selectedMood
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error("Failed to send mood:", error);
        });
    },
  },
};
</script>

<style scoped>
.mood-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 36px;
  cursor: pointer;
}

.material-icons.selected {
  color: #1976d2; 
  transform: scale(1.2);
  transition: 0.2s;
}
</style>
