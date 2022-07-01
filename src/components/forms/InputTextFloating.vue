<script setup>
defineProps({
  id: String,
  label: String,
  value: String,
});
</script>

<template>
  <div class="form-floating">
    <input
      type="text"
      class="form-control"
      :id="id"
      placeholder="placeholder"
      :value="value"
      @input="$emit('input-value', $event.target.value)"
    >
    <label
      :for="id"
    >{{ label }}</label>
  </div>
</template>
