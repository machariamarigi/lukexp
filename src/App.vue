<template>
  <div id="app">
    <TheNavbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  components: {
    TheNavbar
  }
};
</script>

<style>
@import "https://dl.dropbox.com/s/vw29tnowx9etx1o/style.css";
</style>
