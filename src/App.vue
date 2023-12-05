<template>
  <div>
    <el-menu
      mode="horizontal"
      router
    >
      <el-menu-item index="/">Button</el-menu-item>
      <el-menu-item index="/input">Input</el-menu-item>
      <el-menu-item index="/form">Form</el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>