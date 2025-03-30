import { defineStore } from 'pinia';

export const useChatInputStore = defineStore('chatInput', {
  state: () => ({
    input: '',
    inputVisible: true,
    messages: [],
    inputHistory: [],
  }),
  actions: {
    setInput(value) {
      this.input = value;
    },
    addMessage(message) {
      this.messages.push(message);
    },
    addInputToHistory() {
      if (this.input) {
        this.inputHistory.push(this.input);
        this.input = '';
      }
    },
    clearMessages() {
      this.messages = [];
    },
    clearInputHistory() {
      this.inputHistory = [];
    },
    clearInput() {
      this.input = '';
    },
    setInputVisible(value) {
      this.inputVisible = value;
    },
  },
  getters: {
    getInput: (state) => state.input,
    isInputVisible: (state) => state.inputVisible,
    getMessages: (state) => state.messages,
    getInputHistory: (state) => state.inputHistory,
    getInputHistoryLength: (state) => state.inputHistory.length,
    getLastInput: (state) => {
      return state.inputHistory[state.inputHistory.length - 1] || '';
    },
  }
});