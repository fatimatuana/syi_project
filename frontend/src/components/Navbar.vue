<!-- eslint-disable -->
<template>
   <div>
    <v-app-bar app color="primary" dark id="nav-bar">
      <div id="nav-bar-content">
        <a><router-link to="/" tag="button" class="font--logo">My Daily Companion</router-link></a>
        <a><router-link to="/history" tag="button">My Entries</router-link></a>
        <a id="logout" tag="button" @click="logout">Logout</a>
      </div>
      </v-app-bar>
</div>
</template>
<script>
/* eslint-disable */
export default {
  name: "NavbarComponent",
  data() {
    return {
      loggedin: localStorage.getItem('loggedin'),
    };
  },
  methods: {
    logout() {
      localStorage.setItem('loggedin', false);
      this.loggedin = false;
      this.$router.push('/login'); 
    }
  },
};
</script>
<style scoped>
.font--logo{
  font-size: 1.5rem;
}
</style>