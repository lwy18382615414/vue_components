<template>
  <div>
    <input :value="modelValue" :placeholder="placeholder" @input="handleInput" @blur="handleBlur"/>
  </div>
</template>

<script setup lang="ts">
import {inject, onUpdated, ref} from 'vue';
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
  }
})

onUpdated(() => {
  console.log(props.modelValue)
})
const fn: any = inject("fn")
const emit = defineEmits(["update:modelValue"])
function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value)
}
function handleBlur(e: Event) {
  const target = e.target as HTMLInputElement;
  fn(target.value)
}

</script>

<style scoped>
input {
  padding: 6px 10px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  border-radius: 6px;
}
</style>