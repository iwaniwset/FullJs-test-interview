<template>
  <section class="login-page">
    <div class="imageBox">
      <img src="../assets/imgbox.jpg" alt="" />
    </div>
    <div class="loginBox">
      <div class="formBox">
        <h2>Sign In</h2>
        <form @submit.prevent="login" action="">
          <div class="inputBox">
            <span>E-mail</span>
            <input type="text" name="" v-model="email_login"/>
          </div>
          <div class="inputBox">
            <span>Password</span>
            <input type="password" name="" v-model="password_login" />
          </div>
          <div class="inputBox">
            <input type="submit" value="sign in" />
          </div>
          <div class="inputBox">
            <input v-google-signin-button="clientId" type="submit" value="Continue With Google" />
          </div>
          <div class="inputBox">
            <p>Don't have an Account ? <a @click="changePage" href="#">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login-page",
  data(){
    return {
      email_login: '',
      password_login: '',
      clientId: '561628806973-dn5g2g0j6etjuems37ai2skqnu12jipn.apps.googleusercontent.com'
    }
  },
  methods: {
    changePage() {
      this.$emit("changePage", "register-page")
    },
    login(){
      let payload = {
        email: this.email_login,
        password: this.password_login
      }
      this.$emit("login", payload)
    },
    OnGoogleAuthSuccess(idToken) {
      this.$emit("OnGoogleAuthSuccess", idToken);
      
    },
    OnGoogleAuthFail(error) {
      this.$emit(error);
      console.log(error, "error");
    },
  }
};
</script>

<style scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

.login-page .imageBox {
  position: relative;
  width: 50%;
  height: 100%;
}

.login-page .imageBox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(255deg, #e91e63, #03a9f4);
  z-index: 1;
  mix-blend-mode: screen;
}

.login-page .imageBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-page .loginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.login-page .loginBox .formBox {
  width: 50%;
}
.login-page .loginBox .formBox h2 {
  color: #607db8;
  font-weight: 600;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
}

.login-page .loginBox .formBox .inputBox {
  margin-bottom: 20px;
}

.login-page .loginBox .formBox .inputBox span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  color: #607d8b;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

.login-page .loginBox .formBox .inputBox input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
}

.login-page .loginBox .formBox .inputBox input[type="submit"] {
  background: #ff4584;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
}

.login-page .loginBox .formBox .inputBox input[type="submit"]:hover {
  background: #ff0055;
}

.login-page .loginBox .formBox .inputBox p {
  color: #607d8b;
}

.login-page .loginBox .formBox .inputBox p a {
  color: #ff4584;
}

@media (max-width: 768px) {
  .login-page .imageBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .login-page .loginBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .login-page .loginBox .formBox {
    width: 100%;
    padding: 40px;
    background: rgb(255 255 255 / 0.9);
    margin: 50px;
    border-radius: 20px;
    box-shadow: #607db8;
  }

  .login-page .loginBox .formBox h3 {
    color: #607d8b;
    text-align: center;
    margin: 30px 0 10px;
    font-weight: 500;
  }
}
</style>
