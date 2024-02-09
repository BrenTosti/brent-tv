<template>
  <div class="app layout">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta?.transition || 'fade'" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { Component, toNative, Vue } from "vue-facing-decorator";


@Component({})
class App extends Vue {
}

export default toNative(App);
</script>

<style lang="less">

// Global
* {
  box-sizing: border-box;
  user-select: none;

  margin: 0;
  padding: 0;

  font-family: "Quicksand", sans-serif;
}

body {
  background-color: #141414;
  color: #FFFFFF;
}

// Typography
h1, h2, h3, h4, h5, h6 {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-size: 3rem;
}

// Buttons
a {
  color: white;
  background-color: #4CAF50;

  padding: 0.75rem 1.25rem;
  border-radius: 20px;

  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;

  font-weight: 900;
  font-family: "Merriweather", serif;

  height: fit-content;
}

a:hover {
  background-color: #3d8c40;
}

// Layout
html, html body, html body #app {

  min-height: 100vh;
  overflow-y: auto;

  min-width: 100vw;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}

.layout {

  min-height: 100%;
  height: 100%;
  overflow-y: auto;

  min-width: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.view {

  min-height: 100vh;
  overflow-y: hidden;

  min-width: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

// Code blocks
pre, code {
  background-color: #202020;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-family: monospace;
  user-select: text;
}

// Alerts
.error {
  background-color: #661414;
  border-radius: 6px;
  padding: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Merriweather", serif;
  margin-bottom: 1rem;
}

.warning {
  background-color: #665514;
  border-radius: 6px;
  padding: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Merriweather", serif;
  margin-bottom: 1rem;
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>