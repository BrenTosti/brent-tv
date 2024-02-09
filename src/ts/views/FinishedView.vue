<template>
  <div class="finished view">
    <h1>Veel plezier met BrentTV!</h1>
    <h2>Bij vragen of problemen kun je altijd een appje sturen.</h2>
    <div class="actions">
      <router-link :to="{ name: 'download-step' }">Opnieuw</router-link>
      <router-link :to="{ name: 'index' }">Afsluiten</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, toNative } from "vue-facing-decorator";


@Component({})
class FinishedView extends Vue {
}

export default toNative(FinishedView);
</script>

<style scoped lang="less">

.finished.view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  container-type: inline-size;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  @container (width < 900px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
}

</style>