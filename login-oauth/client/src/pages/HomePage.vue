<template>
  <section class="home-page">
    <nav>
      <a href="index.html"><img src="../assets/logo2.png" alt=""/></a>
      <div class="nav-list">
        <div class="inputBox">
            <input @click.prevent="logout" type="submit" value="sign out" />
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
    name : "home-page",
    methods:{
      logout(){
        localStorage.clear()
        this.$emit("changePage", "login-page")
      }
    }
};
</script>

<style>
.home-page {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(221, 224, 236, 0.7), rgba(221,224,236,0.7)), url(../assets/welcome.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}

nav {
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}

nav img{
    width: 150px;
}

.nav-list{
    flex: 1;
    text-align: right;
}

.home-page nav .nav-list .inputBox [type="submit"] {
  background: #2b2a2a;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
}
/* 
.nav-list .inputBox{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}

.nav-list ul li a{
  color: #fff;
  text-decoration: none;
  font-size: 13px;
}

.nav-list ul li::after{
  content: '';
  width:0% ;
  height: 2px;
  background: #f44336;
  display: block;
  margin: auto;
  transition: 0.5s;
} */

.nav-list ul li:hover::after{
  width: 100%;
}
</style>
