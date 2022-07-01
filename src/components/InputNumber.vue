<script setup>
defineProps({
  id: String,
  label: String,
  value: Number,
  addon: String,
});
</script>

<template>
  <div class="mb-3">
    <label
      class="form-label"
      :for="id"
    >{{ label }}</label>
    <input
      type="number"
      min="0"
      class="form-control form-control-sm-"
      :id="id"
      placeholder="placeholder"
      :value="value"
      @input="$emit('input-value', parseInt($event.target.value))"
    >
  </div>
</template>
