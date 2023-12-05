input组件封装
v-model的参数
默认情况下,v-model 在组件上都是使用 modelValue作为prop,并以update:modelValue
作为对应的事件。我们可以通过给v-model指定一个参数来更改这些名字:
<MyComponent v-model: title = "bookTitle" />

组件上使用v-model都是通过modelValue作为prop来接受的
更改父组件的modelValue通过update:modelValue来实现
