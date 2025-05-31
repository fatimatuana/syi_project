<template>
  <!-- eslint-disable -->
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = "";
      await axios.post("....", {
          email: this.email,
          password: this.password
      }).then(function (response) {
          console.log(response);
          // Handle successful login, e.g., redirect to main view
          if (response.data.success) {
              // Redirect to main view  // maybe to another view where the user can enter the location too
              this.$router.push({ path: '/main' });
          } else {
              this.errorMessage = response.data.message || "Login failed. Please try again.";
          }
      })
      .catch(function (error) {
          this.errorMessage = "An error occurred. Please try again.";
          console.error(error);
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}

.login-box {
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-box input {
  width: 100%;
  padding: 10px;
  margin: 0px 0px 12px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-box button {
  width: 100%;
  padding: 10px;
  background-color: #303030;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px 0px;
}

.login-box button:hover {
  background-color: #1565c0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
