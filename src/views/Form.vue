<template>
  <div>
    <Form :model="form" :rules="rules">
      <FormItem prop="user">
        账号： <Input v-model="form.user"/>
      </FormItem>
      <FormItem prop="password">
        密码:  <Input v-model="form.password"/>
      </FormItem>
      <FormItem>
        <Button @click="onsubmit">登录</Button>>
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/Input/index.vue"
import Button from "../components/Button/index.vue"
import Form from "../components/Form/index.vue"
import FormItem from "../components/FormItem/index.vue"
import {ref} from "vue";

const form = ref({
  user: "",
  password: "",
})

const rules = {
  user: [
    {
      require: true,
    },
    {
      min: 3,max: 5, message: "长度在3-5之间"
    }
  ],
  password: [
    {
      require: true,
      message: "必填项"
    },
    {
      min: 3,max: 5, message: "长度在3-5之间"
    }
  ]
}

function onsubmit(e: Event) {
  console.log(form)
}
</script>

<style scoped>

</style>