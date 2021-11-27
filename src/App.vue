<template>
  <div>
    <nav-bar></nav-bar>
    
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from './components/layout/NavBar.vue'

export default {
  components: {NavBar}
}
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --prim-clr: #114da8;
  --bg-clr: #f1f5f8;
  --white-clr: #ffffff;
  --success-clr: #0dc2b0;
  --danger-clr: #f53172;
}

body {
  margin: 0;
  padding-bottom: 4rem;
  background: linear-gradient(to right bottom, #0d1d3a 0, #1a2f55 52%, #365a83)
    no-repeat fixed;
}

#app {
  font-family: "poppins", arial, helvatica, tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-heading {
  background-image: linear-gradient(to bottom right, #d7e7ff 42%, #6699e4 76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 3rem;
  padding: 20px;
}

@media screen and (max-width: 400px) {
  .main-heading {
    font-size: 2rem;
}
}
</style>
