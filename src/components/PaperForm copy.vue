<script setup>
import { reactive, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import InputNumber from './InputNumber.vue';

const paper = reactive({
  width: 0,
  height: 0,
});
const block = reactive({
  width: 0,
  height: 0,
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
  console.log(`1: {paperWidth: ${paperWidth}, blockWidth: ${blockWidth}}`);
  if (paperWidth > blockWidth) {
    gap.x = paperWidth - blockWidth;
  }
});
watch([() => paper.height, () => block.height], ([paperHeight, blockHeight]) => {
  console.log(`2: {paperHeight: ${paperHeight}, blockHeight: ${blockHeight}}`);
  if (paperHeight > blockHeight) {
    gap.y = paperHeight - blockHeight;
  }
});
// watch(() => gap.x, (gapX) => {
//   console.log(`3: {gapX: ${gapX}}`);
//   if (gapX > 0) {
//     margin.left = gapX / 2;
//     margin.right = gapX / 2;
//   }
// });
// watch(() => gap.y, (gapY) => {
//   console.log(`4: {gapY: ${gapY}}`);
//   if (gapY > 0) {
//     margin.top = gapY / 2;
//     margin.bottom = gapY / 2;
//   }
// });
// watch(() => margin.left, (marginLeft) => {
//   console.log(`5: {marginLeft: ${marginLeft}}`);
//   margin.right = gap.x - marginLeft;
// });
// watch(() => margin.right, (marginRight) => {
//   console.log(`6: {marginRight: ${marginRight}}`);
//   margin.left = gap.x - marginRight;
// });
// watch(() => margin.top, (marginTop) => {
//   console.log(`7: {marginTop: ${marginTop}}`);
//   margin.bottom = gap.y - marginTop;
// });
// watch(() => margin.bottom, (marginBottom) => {
//   console.log(`8: {marginBottom: ${marginBottom}}`);
//   margin.top = gap.y - marginBottom;
// });

watch([() => gap.x, () => margin.left, () => margin.right],
  ([x, left, right], [prevX, prevLeft, prevRight]) => {
    console.log('sss');
    if (x !== prevX) {
      console.log('a');
      margin.right = x / 2;
      margin.left = x / 2;
    }
    else if (left !== prevLeft) {
      console.log('b');
      margin.right = x - left;
    }
    else if (right !== prevRight) {
      console.log('c');
      margin.left = x - right;
    }
  }
);

// watch([() => gap.x, () => margin.right], ([gapX, marginRight]) => {
//   margin.left = gapX - marginRight;
// });
// watch([() => gap.x, () => margin.left], ([gapX, marginLeft]) => {
//   margin.right = gapX - marginLeft;
// });
// watch(() => margin.right, (marginRight) => {
//   margin.left = gap.x - marginRight;
// });

const DebounceSeconds = 250;

const resizePaperWidth = useDebounceFn((width) => {
  paper.width = width;
}, DebounceSeconds);
const resizePaperHeight = useDebounceFn((height) => {
  paper.height = height;
}, DebounceSeconds);
const resizeBlockWidth = useDebounceFn((width) => {
  block.width = width;
}, DebounceSeconds);
const resizeBlockHeight = useDebounceFn((height) => {
  block.height = height;
}, DebounceSeconds);
const resizeMarginTop = useDebounceFn((top) => {
  margin.top = top;
}, DebounceSeconds);
const resizeMarginBottom = useDebounceFn((bottom) => {
  margin.bottom = bottom;
}, DebounceSeconds);
const resizeMarginLeft = useDebounceFn((left) => {
  margin.left = left;
}, DebounceSeconds);
const resizeMarginRight = useDebounceFn((right) => {
  margin.right = right;
}, DebounceSeconds);
</script>
<template>
  <div class="row">
    <h5>Paper</h5>
    <div class="col">
      <InputNumber
        id="paperWidth"
        label="width"
        :value="paper.width"
        @input-value="resizePaperWidth"
      />
    </div>
    <div class="col">
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
  <h5>Margin</h5>
  <div class="row row-cols-2">
    <div class="col">
      <InputNumber
        id="marginTop"
        label="top"
        :value="margin.top"
        @input-value="resizeMarginTop"
      />
    </div>
    <div class="col">
      <InputNumber
        id="marginBottom"
        label="bottom"
        :value="margin.bottom"
        @input-value="resizeMarginBottom"
      />
    </div>
    <div class="col">
      <InputNumber
        id="marginLeft"
        label="left"
        :value="margin.left"
        @input-value="resizeMarginLeft"
      />
    </div>
    <div class="col">
      <InputNumber
        id="marginRight"
        label="right"
        :value="margin.right"
        @input-value="resizeMarginRight"
      />
    </div>
  </div>
</template>
