<template>
  <btv-step class="server-connect" name="Stap 5: Verbind met BrentTV." :to="{ name: 'login-step' }" :from="{ name: 'emby-connect-step' }">
    <template #image>
      <img src="@/img/connect.jpeg" alt="Connect to server"/>
    </template>
    <template #instructions>
      <div class="sub-step">
        <p><span>5a.</span> Vul de onderstaande gegevens in bij het veld met het label "Host":</p>
        <pre><code>https://emby.brentdb.nl</code></pre>
      </div>

      <div class="port sub-step">
        <p><span>5b.</span> Haal alle gegevens uit het veld met het label "Port" weg.</p>
      </div>

      <div class="warning">Let op: Zorg er voor dat je 'https' in vult en geen 'http'!</div>
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
class ServerConnectStepView extends Vue {
}

export default toNative(ServerConnectStepView);
</script>

<style lang="less">

.server-connect.step .port.sub-step {

  margin-bottom: 3rem;
}

</style>