<template>
  <btv-step class="emby-welcome" name="Stap 3: Emby welcome." :to="{ name: 'emby-connect-step' }" :from="{ name: 'open-step' }">
    <template #instructions>
      <p>Klik op de knop met de tekst "Volgende" of "Next".</p>
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
class EmbyWelcomeStepView extends Vue {
}

export default toNative(EmbyWelcomeStepView);
</script>

<style scoped lang="less">

</style>