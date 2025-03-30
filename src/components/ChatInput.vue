<script setup>
import { ref, watch, nextTick } from 'vue'
import { useChatInputStore } from '@/stores/chat.js'
const inputStore = useChatInputStore()

import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faComment)

const inputRef = ref(null)

const focusInput = () => {
  console.log('REF:', inputRef.value)
  inputRef.value?.focus()
}

watch(
  () => inputStore.isInputVisible,
  async (newValue) => {
    if (newValue) {
      console.log('Input is visible')
      await nextTick()
      focusInput()
    } else {
      inputStore.setInput('')
    }
  },
)
</script>

<template>
  <div class="chat-input" v-if="inputStore.inputVisible">
    <FontAwesomeIcon icon="comment" class="input-icon" />
    <input
      ref="inputRef"
      type="text"
      placeholder="Type your message..."
      v-model="message"
      @keydown.enter="sendMessage"
    />
  </div>
</template>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #111111a8;
  border-radius: 5px;
  width: 350px;
  height: 50px;
}

.input-icon {
  color: #ffffff;
  font-size: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #3a3a3ac2;
  font-size: 16px;
  outline: none;
  color: #ffffff;
  font-weight: 100;
  font-family: 'Inter', sans-serif;
}
</style>
