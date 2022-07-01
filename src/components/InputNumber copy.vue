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
    <div class="form-floating">
      <input
        type="number"
        class="form-control form-control-sm rounded-0 rounded-start"
        :id="id"
        placeholder="placeholder"
        :value="value"
        @input="$emit('input-value', parseInt($event.target.value))"
      >
      <label
        :for="id"
      >{{ label }}</label>
    </div>
    <span
      class="input-group-text flex-shrink-0"
      :id="`${id}-addon`"
    >{{ addon }}</span>
  </div>
</template>
