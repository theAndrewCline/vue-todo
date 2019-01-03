<template>
  <a-layout>
    <a-layout-header>
      <Title/>
      <a-menu theme="dark" mode="horizonal" :defaultSelectedKeys="[2]">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
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
</style>