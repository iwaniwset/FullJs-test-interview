<template>
  <div id="app">
    <LoginPage
      v-if="pageName == 'login-page'"
      @login="login"
      @changePage="changePage"
      @OnGoogleAuthSuccess="OnGoogleAuthSuccess"
    ></LoginPage>
    <HomePage v-else-if="pageName == 'home-page'"
    @changePage="changePage"
    ></HomePage>
    <Register
      @register="register"
      v-else-if="pageName == 'register-page'"
    ></Register>
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import Register from "./pages/RegisterPage.vue";
import axios from "./config/axios";
export default {
  name: "App",
  components: {
    LoginPage,
    HomePage,
    Register,
  },
  data() {
    return {
      pageName: "login-page",
    };
  },
  methods: {
    changePage(name) {
      this.pageName = name;
    },
    register(payload){
      console.log(payload, "<<<< ini adalah payload");
      axios({
        url: '/users/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then((data)=>{
        this.changePage('login-page')
      })
      .catch((err) => {
          console.log(err.response);
        });
    },
    login(payload) {
      console.log(payload, "<<< ini payload");
      axios({
        url: "/users/login",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then(({ data }) => {
          console.log(data, "<<<< log data");
          localStorage.setItem("token", data.token);
          this.pageName = "home-page";
        })
        .catch((err) => {
          console.log(err.response, "error login");
        });
    },
    OnGoogleAuthSuccess(tokenGoogle){
      axios({
        url: '/users/google-sign',
        method: 'POST',
        data:{
          tokenGoogle
        }
      })
      .then(({})=>{
        localStorage.setItem("token", data.token)
        this.changePage('home-page')
      })
      .catch((err) => {
          console.log(err.response, "error login");
        });
    }
  },
};
</script>

<style></style>
