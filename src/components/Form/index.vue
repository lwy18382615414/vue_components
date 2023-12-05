<template>
  <form id="form" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">

function handleSubmit(e: Event) {
  e.preventDefault();
}
</script>

<style scoped>

</style>