<template>
  <!-- eslint-disable -->
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button class="btn-secondary" @click="handleLogin">Login</button>
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

      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password.";
        return;
      }

      try {
        const response = await axios.post("....", {
          email: this.email,
          password: this.password
        });

        if (response.data.success) {
          this.$router.push({ path: '/main' });
          localStorage.setItem('loggedin', true); // hardcoded for now
        } else {
          this.errorMessage = response.data.message || "Login failed. Please try again.";
        }
      } catch (error) {
        this.errorMessage = "An error occurred. Please try again.";
        console.error(error);
      }
    }
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
  padding: 30px 40px 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  background-color: rgb(255 255 255 / 5%);
  backdrop-filter: blur(10px);
}

.login-box button {
  width: 100%;
}
.login-box button:hover {
  background-color: #1565c0;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
