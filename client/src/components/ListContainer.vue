<template>
  <div class="ListContainer">
    <a-row :gutter="8">
      <ToDoList v-for="ToDoList in ToDoLists" :key="ToDoList.name" :ToDoList="ToDoList"/>
    </a-row>
  </div>
</template>

<script lang="ts">
import ToDoList from './ToDoList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ToDoList
  },
  computed: mapState({
    ToDoLists: (state: any) => state.ToDoLists
  })
}
</script>

<style scoped>
</style>
