<script setup lang="ts">
import { nextTick, ref } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMessagesStore } from "@/stores/messages";
import ChatItem from "./ChatItem.vue";

const messagesStore = useMessagesStore();
const messageList = messagesStore.messages;

const scrollAreaRef = ref<any>(null);

const scrollToBottom = async () => {
  await nextTick();
  const viewport = scrollAreaRef.value?.$el.querySelector(
    '[data-slot="scroll-area-viewport"]',
  );
  if (viewport) {
    viewport.scrollTop = viewport.scrollHeight;
  }
};

defineExpose({
  scrollToBottom,
});
</script>

<template>
  <ScrollArea ref="scrollAreaRef" class="h-full">
    <ul class="flex flex-col gap-2 p-4 pl-2">
      <ChatItem v-for="message in messageList" :key="message.id" :message="message" />
    </ul>
  </ScrollArea>
</template>
