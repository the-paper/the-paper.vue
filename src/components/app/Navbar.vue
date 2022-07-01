<script setup>
defineProps({
  brand: String,
});
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container">
      <span class="navbar-brand mb-0 h1">
        <img
          class="d-inline-block align-bottom"
          src="../../icons/layersHalf.svg"
          alt=""
          width="30"
          height="24"
        />
        {{ brand }}
      </span>
    </div>
  </nav>
</template>
