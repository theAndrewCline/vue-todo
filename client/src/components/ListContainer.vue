<template>
  <div class="ListContainer">
    <ToDoList/>
    <ToDoList/>
    <ToDoList/>
  </div>
</template>

<script lang="ts">

import ToDoList from './ToDoList.vue'

export default {
    components: {
        ToDoList
  }
} 

</script>

<style scoped>
</style>