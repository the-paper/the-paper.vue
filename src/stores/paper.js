import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const usePaperStore = defineStore('paper', () => {

  const paper = reactive({
    width: 0,
    heigth: 0,
  });

  return {
    paper,
  };
});
