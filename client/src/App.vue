<template>
  <div id="app">
    <ListContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListContainer from './components/ListContainer.vue'

@Component({
  components: {
    ListContainer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
