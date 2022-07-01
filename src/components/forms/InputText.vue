<script setup>
defineProps({
  id: String,
  label: String,
  placeholder: String,
  value: String,
});
</script>

<template>
  <div>
    <label
      class="form-label"
      :for="id"
    >{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input-value', $event.target.value)"
    >
  </div>
</template>
