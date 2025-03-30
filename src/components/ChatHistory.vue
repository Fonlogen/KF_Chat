<script setup>
import { useChatInputStore } from '@/stores/chat'

const inputStore = useChatInputStore()
</script>

<template>
  <div class="chat-history">
    <div v-for="(message, index) in messages" :key="index" class="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.chat-history {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #111111a8;
  border-radius: 5px;
  width: 350px;
  height: 300px;
  overflow-y: auto;
}
.message {
  background-color: #3a3a3ac2;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 100;
  font-family: 'Inter', sans-serif;
}
</style>
