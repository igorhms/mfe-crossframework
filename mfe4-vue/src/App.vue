<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <h1>
      <img
        width="80"
        height="80"
        src="https://img.icons8.com/color/48/vue-js.png"
        alt="vue-js"
      />{{' '}}Vue App
    </h1>
    <div>Name: mfe4-vue</div>
    <div style="display: grid; padding: 10px; gap: 10px">
      <RouterLink to="/mfe4-vue">Go to Home</RouterLink>
      <RouterLink to="/mfe4-vue/page1">Pagina 1</RouterLink>
      <RouterLink to="/mfe4-vue/page2">Pagina 2</RouterLink>
    </div>
    
    <RouterView></RouterView>
  </div>

</template>
