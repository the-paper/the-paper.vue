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
  <div>
    <label
      class="form-label"
      :for="id"
    >{{ label }}</label>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input-value', $event.target.value)"
      >
      <span
        class="input-group-text"
        :id="`${id}-addon`"
      >{{ addon }}</span>
    </div>
  </div>
</template>
