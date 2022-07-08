import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const usePaperStore = defineStore('paper', () => {

  const paper = reactive({
    width: 0,
    heigth: 0,
  });
  const block = reactive({
    width: 0,
    heigth: 0,
  });
  const gap = reactive({
    x: 0,
    y: 0,
  });
  const margin = reactive({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const gapX = () => {
    return paper.width - block.width;
  };
  const gapY = () => {
    return paper.heigth - block.heigth;
  };

  const adjustPaperWidth = (width) => {
    paper.width = width;

    const gapX = width - block.width;
    gap.X = gapX;
    margin.left = gap / 2;
    margin.right = gap / 2;
  };
  const adjustBlockWidth = (width) => {
    block.width = width;

    const gapX = paper.width - width;
    gap.X = gapX;
    margin.left = gap / 2;
    margin.right = gap / 2;
  };

  return {
    paper,
    block,
  };
});
