<template>
  <div id="app">
    <layout>
      <Home></Home>
    </layout>
  </div>
</template>

<script>
import Home from './Pages/Home'
import Layout from "./components/Layout";

export default {
  name: 'app',
  components: {
    Layout, Home
  }
}
</script>

<style>
 html, body {
   font-family: Arial, sans-serif;
   background: #FFFFFF;
   margin: 0;
   font-size: 20px;
 }
</style>
