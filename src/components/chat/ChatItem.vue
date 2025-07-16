<script setup lang="ts">
import type { Message } from "@/lib/types";
import { cn, parseDateTime } from "@/lib/utils";

const props = defineProps<{
  message: Message;
}>();
</script>

<template>
  <li :class="cn(
    'py-3 px-2 max-w-[48%] border rounded-2xl',
    props.message.type === 'sent' ? 'self-end bg-accent rounded-br-none' : 'self-start bg-muted rounded-bl-none',
  )">
    <span>{{ props.message.text }}</span>
    <span class="text-xs text-muted-foreground block mt-1.5">
      {{ parseDateTime(props.message.timestamp) }}
    </span>
  </li>
</template>
