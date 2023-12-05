<template>
  <div>
    <Button>default</Button>
    <hr>
    <Button type="success">success</Button>
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button type="waring">waring</Button>
    <Button type="danger">danger</Button>
    <hr>
    <Button type="success" round>success</Button>
    <Button type="primary" round>primary</Button>
    <Button type="info" round>info</Button>
    <Button type="waring" round>waring</Button>
    <Button type="danger" round>danger</Button>
    <hr>
    <Button size="big">default</Button>
    <Button>default</Button>
    <Button size="small">default</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button/index.vue"
</script>

<style scoped>

</style>