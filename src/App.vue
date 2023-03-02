<template>
   
    <navbar_Com/>

    <!-- <Product_CRUD/> -->
    <Spinner_CRUD/>
  <router-view/>
 <Footer_Com/>

</template>

<style>
*{
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-color: rgb(229, 223, 223);
}
</style>
<script>
import navbar_Com from '@/components/Header.vue';
import Footer_Com from '@/components/Footer.vue';
import Spinner_CRUD from '@/components/Spinner.vue';


export default {
  name: 'HomeView',
  components: {
    navbar_Com, Footer_Com, Spinner_CRUD
  }
}

</script>
