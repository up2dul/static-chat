<script setup lang="ts">
import { Send } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-full">
    <Send :size="48" />
    <p class="text-center">Select a chat room to start messaging.</p>
  </div>
</template>
