<template>
  <div id="app">
    <tab-menu></tab-menu>
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TabMenu from "./components/TabMenu";

export default {
  name: "App",
  components: {
     TabMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* これで全部のテキストを真ん中にしている */
  color: #2c3e50;
  
}
*{
margin:0;
padding:0;
}
</style>
