<template>
  <btv-step class="download" name="Stap 1: Download de Emby app." :to="{ name: 'open-step' }" :from="{ name: 'index' }">
    <template #image>
      <img src="@/img/download.jpeg" alt="Image Instruction">
    </template>
    <template #instructions>
      <p>Om gebruik te maken van BrentTV op je apparaten zul je de Emby app moeten downloaden voor een of meerdere van de onderstaande platforms.</p>

      <div class="platforms">
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.mb.android">Android</a>
        <a target="_blank" href="https://itunes.apple.com/us/app/emby/id992180193?ls=1&mt=8">iOS</a>
        <a target="_blank" href="https://emby.brentdb.nl">Windows</a>
      </div>
    </template>
  </btv-step>
</template>

<script lang="ts">
import { Component, toNative, Vue } from "vue-facing-decorator";
import Step from "@/ts/components/Step.vue";


@Component({
    components: {
        [Step.name]: Step
    }
})
class DownloadStepView extends Vue {
}

export default toNative(DownloadStepView);
</script>

<style lang="less">

.download.step .instructions {
  p {
    margin-bottom: 1rem;
  }

  .platforms {
    display: flex;
    gap: 1rem;
    
    a {
      background-color: #2196F3;
      padding: 6px 15px;
      font-size: 14px;
    }
  }
}

</style>