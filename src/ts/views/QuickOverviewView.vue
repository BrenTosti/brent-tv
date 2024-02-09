<template>
  <div class="quick-overview view">
    <div class="header">
      <h2>Snel overzicht</h2>
      <router-link :to="{ name: 'index' }">Terug</router-link>
    </div>
    <div class="content">
      <div class="sub-step">
        <h3>Stap 1: Download de Emby app.</h3>
        <p>Om gebruik te maken van BrentTV op je apparaten zul je de Emby app moeten downloaden voor een of meerdere van de onderstaande platforms.</p>
      </div>

      <div class="sub-step">
        <h3>Stap 2: Open de Emby app.</h3>
        <p>Open de nieuw geïnstalleerde Emby app op je apparaat.</p>
      </div>

      <div class="sub-step">
        <h3>Stap 3: Emby welcome.</h3>
        <p>Klik op de knop met de tekst "Volgende" of "Next".</p>
      </div>

      <div class="sub-step">
        <h3>Stap 4: Emby connect.</h3>
        <p>Klik op de knop met de tekst "Skip" of "Overslaan".</p>
      </div>

      <div class="sub-step">
        <h3>Stap 5: Verbind met BrentTV.</h3>
        <p><span>5a.</span> Vul 'https://emby.brentdb.nl' in bij het veld met het label "Host":</p>
        <p><span>5b.</span> Haal alle gegevens uit het veld met het label "Port" weg.</p>
        <div class="warning">Let op: Zorg er voor dat je 'https' in vult en geen 'http'!</div>
      </div>

      <div class="sub-step">
        <h3>Stap 6: Inloggen bij BrentTV.</h3>
        <p><span>6a.</span> Vul de verkregen inloggegevens in bij de juiste velden binnen het inlogformulier.</p>
        <p><span>6b.</span> Vink het veld "Remember me" of "Onthoud mij" aan.</p>
        <p><span>6c.</span> Klik op de knop met de tekst "Sign in" of "Inloggen".</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, toNative } from "vue-facing-decorator";


@Component({})
class QuickOverviewView extends Vue {
}

export default toNative(QuickOverviewView);
</script>

<style scoped lang="less">

.quick-overview {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  container-type: inline-size;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      flex-grow: 1;
    }
  }

  @container (width < 400px) {
    .header {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 1.4rem;

      a {
        font-size: 0.7rem;
      }
    }
  }

  .content {
    flex-grow: 1;

    .sub-step {
      margin-bottom: 2rem;

      h3 {
        font-size: 1rem;
        margin-bottom: 0.75rem;
      }

      p {
        margin-bottom: 0.5rem;
      }

      .warning {
        font-size: 0.75rem;
      }
    }
  }
}

</style>