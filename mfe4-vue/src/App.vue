<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <h1>Vue App</h1>
    <div>Name: mfe4-vue</div>
    <div style="display: grid; padding: 10px; gap: 10px">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/mfe4-vue/page1">Pagina 1</RouterLink>
      <RouterLink to="/mfe4-vue/page2">Pagina 2</RouterLink>
    </div>
  </div>

  <RouterView></RouterView>
</template>
