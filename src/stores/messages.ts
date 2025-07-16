import { defineStore } from "pinia";
import { computed, ref } from "vue";
import messageList from "@/data/list-messages.json";
import type { Message } from "@/lib/types";

export const useMessagesStore = defineStore("messages", () => {
  const messages = ref<Array<Message>>(messageList);
  const addMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.value.length + 1,
      text: message,
      timestamp: new Date().toISOString(),
      type: "sent",
    };
    messages.value.push(newMessage);
  };
  return { messages, addMessage };
});
