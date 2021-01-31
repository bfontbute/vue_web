<template>
  <div id="app">
    <div class="container-fluid">
      <Menu /> <!-- se añade el menú -->
      <b-breadcrumb :items="items"></b-breadcrumb>
      <router-view/>
    <Footer />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5cacf;
  /*color lletres generals*/ 
}

#nav {
  padding: 30px;
  color: #ff0000;

}

#nav a {
  font-weight: bold;
  color: #ff0000;
}

#nav a.router-link-exact-active {
  color: #ffd000;
  
}
 .breadcrumb {
      background-color: #e9ecef00;
    } 
  
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: rgb(32, 32, 32);
    height: 100%;
}
</style>
