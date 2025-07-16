<script setup lang="ts">
import { ArrowUp } from "lucide-vue-next";
import { nextTick, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type ChatList from "@/components/chat/ChatList.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import roomList from "@/data/list-rooms.json";
import { useMessagesStore } from "@/stores/messages";

const route = useRoute();
const router = useRouter();
const roomId = route.params.roomId;
const currentRoom = ref(
  roomList.data.customer_rooms.find(room => room.room_id === roomId),
);

const chatListRef = ref<InstanceType<typeof ChatList> | null>(null);

watch(
  () => route.params.roomId,
  async newRoomId => {
    if (newRoomId) {
      const newRoom = roomList.data.customer_rooms.find(
        room => room.room_id === newRoomId,
      );
      if (newRoom) {
        currentRoom.value = newRoom;
        await nextTick();
        chatListRef.value?.scrollToBottom();
      } else {
        router.push("/"); // Redirect to home if room not found
      }
    }
  },
  { immediate: true },
);

const messagesStore = useMessagesStore();

const newMessage = ref("");
const sendMessage = async () => {
  if (newMessage.value.trim()) {
    messagesStore.addMessage(newMessage.value);
    newMessage.value = "";
    await nextTick();
    chatListRef.value?.scrollToBottom();
  }
};
</script>

<template>
  <!-- 86px = height of container that contains input and send button -->
  <div class="relative h-full pb-[86px]">
    <div class="bg-background px-4 py-6 flex items-center border-b-2">
      <h1 class="text-lg font-bold">{{ currentRoom?.name }}</h1>
    </div>
    <div class="absolute z-2 bottom-0 inset-x-0 bg-background px-4 py-6 flex items-center gap-2 border-t-2">
      <Input placeholder="Type your message..." v-model="newMessage" />
      <Button @click="sendMessage" class="flex-shrink-0" :disabled="!newMessage.trim()">
        <ArrowUp />
      </Button>
    </div>

    <ChatList ref="chatListRef" class="h-[calc(100%-96px)] relative" />
  </div>
</template>
