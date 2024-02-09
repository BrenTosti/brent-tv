<template>
  <div class="welcome view">
    <h1>BrentTV</h1>
    <h2>Emby installatie tutorial</h2>
    <div class="actions">
      <router-link :to="{ name: 'quick-overview' }">Snel overzicht</router-link>
      <router-link :to="{ name: 'download-step' }">Stap voor Stap</router-link>
    </div>
    <span class="credits">(Met dank aan Jules die wel de tijd wilde steken in het mooi maken)</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, toNative } from "vue-facing-decorator";


@Component({})
class WelcomeView extends Vue {
}

export default toNative(WelcomeView);
</script>

<style scoped lang="less">

.welcome.view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  container-type: inline-size;

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  @container (width < 450px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .actions {
      flex-direction: column;
    }
  }

  .credits {
    position: fixed;
    bottom: 20px;
    padding-inline: 20px;
    text-align: center;
  }
}

</style>