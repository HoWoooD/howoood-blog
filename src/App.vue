<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './Pages/Home'

export default {
  name: 'app',
  components: {
      Home
  }
}
</script>

<style>
 html, body {
   font-family: Arial, sans-serif;
   background: #FFFFFF;
   margin: 0;
 }
</style>
