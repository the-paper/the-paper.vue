<script setup>
import { reactive, watch } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import InputNumber from './InputNumberFloat.vue';

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

watch(() => paper.width - block.width, (gapX) => {
  console.log(`1: {gapX: ${gapX}}`);
  if (gapX > 0) {
    gap.x = gapX;
    margin.left = gapX / 2;
    margin.right = gapX / 2;
  }
});
watch(() => paper.height - block.height, (gapY) => {
  console.log(`2: {gapY: ${gapY}}`);
  if (gapY > 0) {
    gap.y = gapY;
    margin.top = gapY / 2;
    margin.bottom = gapY / 2;
  }
});

const DebounceSeconds = 250;
const adjustPaperWidth = useDebounceFn((width) => {
  paper.width = width;
}, DebounceSeconds);
const adjustPaperHeight = useDebounceFn((height) => {
  paper.height = height;
}, DebounceSeconds);
const adjustBlockWidth = useDebounceFn((width) => {
  block.width = width;
}, DebounceSeconds);
const adjustBlockHeight = useDebounceFn((height) => {
  block.height = height;
}, DebounceSeconds);

const adjustMarginLeft = useDebounceFn((left) => {
  margin.left = left;
  margin.right = gap.x - left;
}, DebounceSeconds);
const adjustMarginRight = useDebounceFn((right) => {
  margin.right = right;
  margin.left = gap.x - right;
}, DebounceSeconds);
const adjustMarginTop = useDebounceFn((top) => {
  margin.top = top;
  margin.bottom = gap.y - top;
}, DebounceSeconds);
const adjustMarginBottom = useDebounceFn((bottom) => {
  margin.bottom = bottom;
  margin.top = gap.y - bottom;
}, DebounceSeconds);

</script>
<template>
  <div class=" pt-3">
    <div class="">
      <div class="row">
        <h5>Paper</h5>
        <div class="col">
          <InputNumber
            id="paperWidth"
            label="width"
            :value="paper.width"
            @input-value="adjustPaperWidth"
          />
        </div>
        <div class="col">
          <InputNumber
            id="paperHeight"
            label="height"
            :value="paper.height"
            @input-value="adjustPaperHeight"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark mx-n">
    <div class=" p-3">
      <h5 class="text-white">Block</h5>
      <div class="row">
        <div class="col">
          <InputNumber
            id="blockWidth"
            label="width"
            :value="block.width"
            @input-value="adjustBlockWidth"
          />
        </div>
        <div class="col">
          <InputNumber
            id="blockHeight"
            label="height"
            :value="block.height"
            @input-value="adjustBlockHeight"
          />
        </div>
      </div>
    </div>
  </div>
  <div class=" pt-3">
    <div class="`">
      <h5>Margin</h5>
      <div class="row justify-content-center">
        <div class="col-6">
          <InputNumber
            id="marginTop"
            label="top"
            addon="T"
            :value="margin.top"
            @input-value="adjustMarginTop"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <InputNumber
            id="marginLeft"
            label="left"
            addon="L"
            :value="margin.left"
            @input-value="adjustMarginLeft"
          />
        </div>
        <div class="col-6">
          <InputNumber
            id="marginRight"
            label="right"
            addon="R"
            :value="margin.right"
            @input-value="adjustMarginRight"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <InputNumber
            id="marginBottom"
            label="bottom"
            addon="B"
            :value="margin.bottom"
            @input-value="adjustMarginBottom"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mx-n {
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
</style>
