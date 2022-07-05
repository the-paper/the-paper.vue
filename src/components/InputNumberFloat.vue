<script setup>
defineProps({
  id: String,
  label: String,
  value: Number,
  addon: String,
});
</script>

<template>
  <div class="form-floating">
    <input
      type="number"
      class="form-control"
      :id="id"
      placeholder="placeholder"
      :value="value"
      @input="$emit('input-value', parseInt($event.target.value))"
    >
    <label
      :for="id"
    >{{ label }}</label>
  </div>
</template>
