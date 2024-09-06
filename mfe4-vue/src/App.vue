<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { filter } from "rxjs";
import { getUsernameObservable } from "shared-state-lib";

const router = useRouter();
const username = ref("");

const username$ = getUsernameObservable();

const usernameSubscription = username$.subscribe((value) => {
  username.value = value;
});

onMounted(() => {
  if (window.AngularRouter && window.AngularRouter.events) {
    const angularSubscription = window.AngularRouter.events
      .pipe(filter((e) => e instanceof window.NavigationEnd))
      .subscribe((event) => {
        router.push(event?.urlAfterRedirects);
        console.log("VUE - ", event);
      });

    onUnmounted(() => {
      angularSubscription.unsubscribe();
      usernameSubscription.unsubscribe();
    });
  } else {
    console.error("AngularRouter não está disponível.");
  }
});
</script>

<template>
  <div class="container">
    <div class="title">
      <img
        width="65"
        height="60"
        src="https://img.icons8.com/color/48/vue-js.png"
        alt="vue-js"
      />
      <span>Aplicação Vue</span>
    </div>
    <p>Username: {{ username }}</p>
    <!-- <div>Name: mfe4-vue</div> -->
    <div style="display: grid; padding: 5px; gap: 10px">
      <RouterLink to="/mfe4-vue">Go to Home</RouterLink>
      <RouterLink to="/mfe4-vue/page1">Pagina 1</RouterLink>
      <RouterLink to="/mfe4-vue/page2">Pagina 2</RouterLink>
    </div>

    <RouterView></RouterView>
  </div>
</template>
