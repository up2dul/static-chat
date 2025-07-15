<script setup lang="ts">
import { RouterView } from "vue-router";
import RoomList from "./components/room/RoomList.vue";
</script>

<template>
  <main class="w-full h-screen flex">
    <section class="w-1/2">
      <RoomList />
    </section>

    <section class="w-1/2 bg-accent">
      <RouterView />
    </section>
  </main>
</template>
