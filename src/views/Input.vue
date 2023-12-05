<template>
  <div>
    <Input v-model="val" />
    输入的值是： {{ val }}
  </div>
</template>

<script setup lang="ts">
import Input from "../components/Input/index.vue"
import { ref } from "vue";

const val = ref("123")
</script>

<style scoped>

</style>