<template>
  <!-- eslint-disable -->
   <div>
   <v-container fluid>
    <router-view />
   </v-container>
</div>
</template>
<script>
/* eslint-disable */
export default {
  name: "AppView",
  components: {
   
  },
  data() {
    return {
      loggedin: localStorage.getItem('loggedin'),
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');
*{
  font-family: 'Outfit', Avenir, Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
}
body{
  background: #020024;
  background: linear-gradient(to top right, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%,rgba(0, 212, 205, 1) 100%, rgba(0, 212, 255, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 0;

}
p{
  font-size: 1em;
}
.--medium{
  font-weight: 800;
  font-size: 2em;
}
.--big{
  font-weight: 800;
  font-size: 5em;
}
button{
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}
.btn-primary{
  background-color: #dadada;
  color: rgba(9, 9, 121, 1);
  box-shadow: 0px 4px 10px rgba(10, 10, 10, 0.3);
}
.btn-primary:disabled{
  background-color: #1976d238;
  color: #ffffff4f;
  cursor: not-allowed;
}
.btn-secondary{
  background-color: rgba(9, 9, 121, 1);
  color:#dadada;
  box-shadow: 0px 4px 10px rgba(10, 10, 10, 0.3);
}
button:disabled{
  background-color: #1976d238;
  color: #ffffff4f;
  cursor: not-allowed;
  box-shadow: 0px 0px;
}
.mt-1{
  margin-top: 1vh;
}
.mt-3{
  margin-top: 3vh;
}
.mt-5{
  margin-top: 5vh;
}
.--detail{
  font-size: 0.8em;
  color: #fafafa;
}
a#logout{
  color: rgb(43 43 138);

  text-decoration: none;
  font-size: 1em;
  margin-left: auto;
}
a:hover, button:hover{
  cursor: pointer;
}
a.--detail{
  text-decoration: underline;
  color: #aeaeae;
}
a.router-link{
  text-decoration: none;
  color: #fafafa;
}
 a.router-link-active{
  text-decoration: none;
  color: #f6f6f6;
}
a{
  text-decoration: none;
  color: rgb(9 9 121 / 84%);
}
.material-icons{
  font-size: 34px;
}
.font--logo{
  font-family: "Rouge Script", cursive;
  font-weight: 400;
  font-style: normal;
}
input {
  width: 100%;
  padding: 12px 15px;
  margin: 0px 0px 12px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
}
#nav-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
}
#nav-bar-content a {
  padding: 20px 10px;
}
</style>
