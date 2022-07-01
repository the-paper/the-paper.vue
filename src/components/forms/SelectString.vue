<script setup>
defineProps({
  id: String,
  label: String,
  value: String,
  options: Array,
});
</script>

<template>
  <div>
    <label
      class="form-label"
      :for="id"
    >{{ label }}</label>
    <select
      class="form-select"
      :id="id"
      aria-label=""
      :value="value"
      @input="$emit('select-value', $event.target.value)"
    >
      <option disabled value="">선택해주세요</option>
      <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>
