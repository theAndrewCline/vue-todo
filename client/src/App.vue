<template>
  <a-layout>
    <a-layout-header>
      <Title/>
      <Settings/>
    </a-layout-header>
    <a-layout-content>
      <ListContainer/>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListContainer from "./components/ListContainer.vue";
import Title from "./components/Title.vue";
import Settings from "./components/Settings.vue";

@Component({
  components: {
    ListContainer,
    Title,
    Settings
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}
</style>