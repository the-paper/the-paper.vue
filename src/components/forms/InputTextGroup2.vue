<script setup>
defineProps({
  id: String,
  label: String,
  placeholder: String,
  value: String,
  addon: String,
});
</script>

<template>
  <div class="input-group">
    <span
      class="input-group-text"
      :id="`${id}-addon`"
    >{{ addon }}</span>
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
