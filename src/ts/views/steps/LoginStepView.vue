<template>
  <btv-step class="emby-welcome" name="Stap 6: Inloggen bij BrentTV." :to="{ name: 'finished' }" :from="{ name: 'server-connect-step' }">
    <template #image>
      <img src="@/img/login.jpeg" alt="Inloggen bij BrentTV"/>
    </template>
    <template #instructions>
      <div class="sub-step">
        <p><span>6a.</span> Vul de verkregen inloggegevens in bij de juiste velden binnen het inlogformulier.</p>
      </div>
      <div class="sub-step">
        <p><span>6b.</span> Vink het veld "Remember me" of "Onthoud mij" aan.</p>
      </div>
      <div class="sub-step">
        <p><span>6c.</span> Klik op de knop met de tekst "Sign in" of "Inloggen".</p>
      </div>
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
class LoginStepView extends Vue {
}

export default toNative(LoginStepView);
</script>

<style scoped lang="less">

</style>