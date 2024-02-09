<template>
  <btv-step class="open" name="Stap 2: Open de Emby app." :to="{ name: 'emby-welcome-step' }" :from="{ name: 'download-step' }">
    <template #instructions>
      <p>Open de nieuw geïnstalleerde Emby app op je apparaat.</p>
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
class OpenStepView extends Vue {
}

export default toNative(OpenStepView);
</script>

<style scoped lang="less">

</style>