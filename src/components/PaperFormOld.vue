<script setup>
// import { ref } from 'vue';
import { reactive, watch } from 'vue'

import InputNumber from './InputNumber.vue';

// const paperWidth = ref(0);
// const paperHeight = ref(0);
// const inputPaperWidth = (value) => {
//   paperWidth.value = value;
// };
// const inputPaperHeight = (value) => {
//   paperHeight.value = value;
// };

// const state0 = reactive({
//   paperWidth: 0,
//   paperHeight: 0,
//   blockWidth: 0,
//   blockHeight: 0,
// });

// const state1 = reactive({
//   paper: {
//     width: 0,
//     height: 0,
//   },
//   block: {
//     width: 0,
//     height: 0,
//   },
// });

const paper = reactive({
  width: 210,
  height: 297,
});
const block = reactive({
  width: 150,
  height: 100,
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
watch([() => paper.width, () => block.width], ([paperWidth, blockWidth]) => {
  if (paperWidth > blockWidth) {
    gap.x = paperWidth - blockWidth;
  }
});
watch([() => paper.height, () => block.height], ([paperHeight, blockHeight]) => {
  if (paperHeight > blockHeight) {
    gap.y = paperHeight - blockHeight;
  }
});

const resizePaperWidth = (width) => {
  paper.width = width;
};
const resizePaperHeight = (height) => {
  paper.height = height;
};
const resizeBlockWidth = (width) => {
  block.width = width;
};
const resizeBlockHeight = (height) => {
  block.height = height;
};
</script>

<template>
  <div class="row g-2">
    <div class="col-2">
      <div class="d-flex align-items-center h-100">
        Paper
      </div>
    </div>
    <div class="col-5">
      <InputNumber
        id="paperWidth"
        label="width"
        :value="paper.width"
        @input-value="resizePaperWidth"
      />
    </div>
    <div class="col-5">
      <InputNumber
        id="paperHeight"
        label="height"
        :value="paper.height"
        @input-value="resizePaperHeight"
      />
    </div>
  </div>
  <h5>Block</h5>
  <div class="row">
    <div class="col">
      <InputNumber
        id="blockWidth"
        label="width"
        :value="block.width"
        @input-value="resizeBlockWidth"
      />
    </div>
    <div class="col">
      <InputNumber
        id="blockHeight"
        label="height"
        :value="block.height"
        @input-value="resizeBlockHeight"
      />
    </div>
  </div>
</template>
