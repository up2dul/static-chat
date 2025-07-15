<script setup lang="ts">
import { RouterView } from "vue-router";
import RoomList from "./components/room/RoomList.vue";
</script>

<template>
  <main class="w-full h-screen flex">
    <section class="p-4 w-1/2">
      <RoomList />
    </section>

    <section class="p-4 w-1/2">
      <RouterView />
    </section>
  </main>
</template>
