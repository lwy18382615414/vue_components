<template>
  <div class="form-item">
    <slot @fn="fn"></slot>
    <div class="form-item-label">{{ label }}</div>
    <div v-if="isShow" class="error">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import {inject, ref} from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  prop: {
    type: String,
    default: "",
  }
})

const isShow = ref(false);
const message = ref("");
const rules = inject("rules")

function fn(val: string) {

}
</script>

<style scoped>
.form-item {
  margin-bottom: 10px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>