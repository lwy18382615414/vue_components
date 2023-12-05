<template>
  <div>
    <button :class="[props.type, 'btn-' + props.size, props.round ? 'round' : '']">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "default"
  },
  round: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
button {
  border-radius: 6px;
  outline: none;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fff;
  line-height: 1.5;
  font-size: 14px;
  padding: 4px 15px;
}

button.btn-default {
  line-height: 1.5;
  font-size: 14px;
  padding: 4px 15px;
}
button.btn-small {
  line-height: 1.5;
  font-size: 12px;
  padding: 2px 12px;
}
button.btn-big {
  line-height: 1.5;
  font-size: 16px;
  padding: 6px 18px;
}

button.default {
  border-color: var(--default);
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.88);
}
button.success {
  border-color: var(--success);
  background-color: var(--success);
}
button.primary {
  border-color: var(--primary);
  background-color: var(--primary);
}
button.info {
  border-color: var(--info);
  background-color: var(--info);
}
button.waring {
  border-color: var(--waring);
  background-color: var(--waring);
}
button.danger {
  border-color: var(--danger);
  background-color: var(--danger);
}
button.round {
  border-radius: 14px;
}
</style>