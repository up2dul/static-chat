<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMessagesStore } from "@/stores/messages";
import ChatItem from "./ChatItem.vue";

const messagesStore = useMessagesStore();
const messageList = messagesStore.messages;
</script>

<template>
  <ScrollArea class="h-full">
    <ul class="flex flex-col gap-2 p-4 pl-2">
      <ChatItem v-for="message in messageList" :key="message.id" :message="message" />
    </ul>
  </ScrollArea>
</template>
