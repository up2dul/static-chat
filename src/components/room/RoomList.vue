<script setup lang="ts">
import { ref } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import roomList from "@/data/list-rooms.json";
import { parseDate } from "@/lib/utils";
import RoomItem from "./RoomItem.vue";

const rooms = ref(roomList.data.customer_rooms);
</script>

<template>
  <ScrollArea class="h-full p-4 pr-2 border-r-2">
    <ul class="flex flex-col gap-2">
      <li v-for="room in rooms" :key="room.room_id">
        <RoomItem
          :roomId="room.room_id"
          :name="room.name"
          :lastMessage="room.last_comment_text"
          :lastMessageTime="parseDate(room.last_comment_timestamp)"
          :avatarUrl="room.user_avatar_url"
          :isWaiting="room.is_waiting"
        />
      </li>
    </ul>
  </ScrollArea>
</template>
