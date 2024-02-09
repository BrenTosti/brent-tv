<template>
  <btv-step class="emby-connect" name="Stap 4: Emby connect." :to="{ name: 'server-connect-step' }" :from="{ name: 'emby-welcome-step' }">
    <template #image>
      <img src="@/img/emby-connect.jpeg" alt="Emby connect skip button"/>
    </template>
    <template #instructions>
      <p>Klik op de knop met de tekst "Skip" of "Overslaan".</p>
      <p>De juiste knop is te zien in de afbeelding naast deze tekst.</p>
    </template>
  </btv-step>
</template>

<script lang="ts">
import { Vue, Component, toNative } from "vue-facing-decorator";
import Step from "@/ts/components/Step.vue";


@Component({
    components: {
        [Step.name]: Step
    }
})
class EmbyConnectStepView extends Vue {
}

export default toNative(EmbyConnectStepView);
</script>

<style scoped lang="less">

</style>