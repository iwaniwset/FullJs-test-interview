<template>
  <section class="register-page">
    <div class="imageBox">
      <img src="../assets/register.jpg" alt="" />
    </div>
    <div class="registerBox">
      <div class="formBox">
        <h2>Sign Up</h2>
        <form @submit.prevent="register" action="">
          <div class="inputBox">
            <span>E-mail</span>
            <input type="text" name="" v-model="register_email" />
          </div>
          <div class="inputBox">
            <span>Password</span>
            <input type="password" name="" v-model="register_password" />
          </div>
          <div class="inputBox">
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "register-page",
data(){
  return{
    register_email: '',
    register_password: ''
  }
},
methods: {
  register(){
    let payload = {
      email: this.register_email,
      password: this.register_password
    }
    this.$emit("register", payload)
  }
}
}
</script>

<style>
.register-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

.register-page .imageBox {
  position: relative;
  width: 50%;
  height: 100%;
}

.register-page .imageBox::before {
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

.register-page .imageBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.register-page .registerBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.register-page .registerBox .formBox {
  width: 50%;
}
.register-page .registerBox .formBox h2 {
  color: #607db8;
  font-weight: 600;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
}

.register-page .registerBox .formBox .inputBox {
  margin-bottom: 20px;
}

.register-page .registerBox .formBox .inputBox span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  color: #607d8b;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

.register-page .registerBox .formBox .inputBox input {
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

.register-page .registerBox .formBox .inputBox input[type="submit"] {
  background: #ff4584;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
}

.register-page .registerBox .formBox .inputBox input[type="submit"]:hover {
  background: #ff0055;
}

.register-page .registerBox .formBox .inputBox p {
  color: #607d8b;
}

.register-page .registerBox .formBox .inputBox p a {
  color: #ff4584;
}

@media (max-width: 768px) {
  .register-page .imageBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .register-page .registerBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .register-page .registerBox .formBox {
    width: 100%;
    padding: 40px;
    background: rgb(255 255 255 / 0.9);
    margin: 50px;
    border-radius: 20px;
    box-shadow: #607db8;
  }

  .register-page .registerBox .formBox h3 {
    color: #607d8b;
    text-align: center;
    margin: 30px 0 10px;
    font-weight: 500;
  }
}
</style>