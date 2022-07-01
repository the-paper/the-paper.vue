<script setup>
defineProps({
  id: String,
  label: String,
  value: String,
  addon: String,
});
</script>

<template>
  <div class="input-group">
    <div class="form-floating flex-grow-1">
      <input
        type="text"
        class="form-control rounded-0 rounded-start"
        :id="id"
        placeholder="placeholder"
        :value="value"
        @input="$emit('input-value', $event.target.value)"
      >
      <label
        :for="id"
      >{{ label }}</label>
    </div>
    <span
      class="input-group-text"
      :id="`${id}-addon`"
    >{{ addon }}</span>
  </div>
</template>
