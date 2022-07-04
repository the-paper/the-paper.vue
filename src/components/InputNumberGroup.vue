<script setup>
defineProps({
  id: String,
  addon: String,
  value: Number,
});
</script>

<template>
  <div class="input-group mb-3">
    <span
      class="input-group-text"
      :id="`${id}-addon`"
    >{{ addon }}</span>
    <input
      type="number"
      min="0"
      class="form-control"
      :value="value"
      @input="$emit('input-value', parseInt($event.target.value))"
    >
  </div>
</template>
