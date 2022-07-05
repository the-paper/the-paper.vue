<script setup>
defineProps({
  id: String,
  label: String,
  value: Number,
  addon: String,
});
</script>

<template>
  <div class="input-group flex-nowrap">
    <span
      class="input-group-text flex-shrink-0"
      :id="`${id}-addon`"
    >{{ addon }}</span>
    <div class="form-floating">
      <input
        type="number"
        class="form-control form-control-sm rounded-0 rounded-end"
        :id="id"
        placeholder="placeholder"
        :value="value"
        @input="$emit('input-value', parseInt($event.target.value))"
      >
      <label
        :for="id"
      >{{ label }}</label>
    </div>
  </div>
</template>
