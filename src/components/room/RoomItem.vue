<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  roomId: string;
  avatarUrl?: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  isWaiting?: boolean;
}>();
</script>

<template>
  <RouterLink
    :to="`/room/${roomId}`"
    class="p-2 flex items-center gap-4 transition-colors hover:bg-accent/50"
    aria-label="Room Item"
  >
    <div class="rounded-full w-16 h-14 bg-accent overflow-hidden relative">
      <img
        src="https://latest-multichannel.qiscus.com/img/default_avatar.svg"
        :alt="`${name}'s avatar`"
        class="object-cover"
      />
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between gap-1">
        <p class="text-lg font-semibold truncate">{{ name }}</p>
        <p class="text-xs text-muted-foreground">{{ lastMessageTime }}</p>
      </div>
      <p v-if="isWaiting" class="text-xs text-foreground/80 font-semibold line-clamp-1">{{ lastMessage }}</p>
      <p v-else class="text-xs text-foreground/60 line-clamp-1">{{ lastMessage }}</p>
    </div>
  </RouterLink>
</template>
