<script setup>
defineProps({
  id: String,
  label: String,
  placeholder: String,
  value: String,
  helpInline: String,
});
</script>

<template>
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label
        class="col-form-label"
        :for="id"
      >{{ label }}</label>
    </div>
    <div class="col-auto">
      <input
        type="text"
        class="form-control"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input-value', $event.target.value)"
      >
    </div>
    <div class="col-auto">
      <span
        :id="`${id}HelpInline`"
        class="form-text"
      >{{ helpInline }}</span>
    </div>
  </div>
</template>
