<script setup lang="ts">
import { ArrowUp } from "lucide-vue-next";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import roomList from "@/data/list-rooms.json";

const route = useRoute();
const router = useRouter();
const roomId = route.params.roomId;
const currentRoom = ref(
  roomList.data.customer_rooms.find(room => room.room_id === roomId),
);
watch(
  () => route.params.roomId,
  newRoomId => {
    if (newRoomId) {
      const newRoom = roomList.data.customer_rooms.find(
        room => room.room_id === newRoomId,
      );
      if (newRoom) {
        currentRoom.value = newRoom;
      } else {
        router.push("/"); // Redirect to home if room not found
      }
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="relative h-full">
    <div class="bg-background px-4 py-6 flex items-center border-b-2">
      <h1 class="text-lg font-bold">{{ currentRoom?.name }}</h1>
    </div>
    <div class="absolute bottom-0 inset-x-0 bg-background px-4 py-6 flex items-center gap-2 border-t-2">
      <Input placeholder="Type your message..." />
      <Button>
        <ArrowUp />
      </Button>
    </div>
  </div>
</template>
