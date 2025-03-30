<script setup>
import { useChatInputStore } from '@/stores/chat.js'
import ChatHistory from './components/ChatHistory.vue'
import ChatInput from './components/ChatInput.vue'

addEventListener('keydown', (event) => {
  if (event.key === 't' || event.key === 'T') {
    event.preventDefault()
    useChatInputStore().setInputVisible(true)
  } else if (event.key === 'Escape') {
    event.preventDefault()
    useChatInputStore().setInputVisible(false)
    useChatInputStore().setInput('')
  }
})
</script>

<template>
  <div class="chat">
    <ChatHistory />
    <ChatInput />
  </div>
</template>

<style scoped>
.chat {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
