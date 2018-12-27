<template>
  <a-list-item>
    <span>{{ todo.text }}</span>
    <a slot="actions">edit</a>
    <a slot="actions" @click="$emit('removeTodo', todo.id)">delete</a>
  </a-list-item>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>