<template>
  <!-- eslint-disable -->
  <div class="registration-container">
    <div class="registration-box">
      <h2>Sign Up</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
      <button class="btn-secondary" @click="handleSignup">Sign Up</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <div class="mt-3"><router-link class="--detail" to="/login">Already have an account? Login</router-link></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: "RegistrationView",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleSignup() {
      this.errorMessage = "";

      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = "Please fill in all fields.";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          email: this.email,
          password: this.password,
          username: this.email.split('@')[0] // using email prefix as username
        }).catch(error => {
          console.error("Error during signup:", error);
          this.errorMessage = "An error occurred. Please try again.";
          return null;
        });
        console.log("Signup response:", response.data);
        // assuming the response contains a success field
        this.$router.push({ path: '/' });
        localStorage.setItem('loggedin', true); // hardcoded for now
        localStorage.setItem('userEmail', this.email); // store email for future use
      } catch (error) {
        this.errorMessage = "An error occurred.";
        console.error(error);
      }
    }
  },
};
</script>

<style scoped>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}
.registration-box {
  padding: 30px 40px 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  background-color: rgb(255 255 255 / 5%);
  backdrop-filter: blur(10px);
}
.registration-box button {
  width: 100%;
}
.registration-box button:hover {
  background-color: #1565c0;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
