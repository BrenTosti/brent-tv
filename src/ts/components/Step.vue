<template>
  <div class="step view">
    <div class="header">
      <h2>{{ name }}</h2>
    </div>
    <div class="content">
      <div class="image" v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="instructions">
        <slot name="instructions"></slot>
      </div>
    </div>
    <div class="actions">
      <router-link :to="from">Vorige</router-link>
      <router-link :to="to">Volgende</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, toNative, Prop } from "vue-facing-decorator";


@Component({
  name: "btv-step"
})
class Step extends Vue {

  @Prop()
  name?: string;

  @Prop({ default: () => ({ name: "index" }) })
  to?: any;

  @Prop({ default: () => ({ name: "index" }) })
  from?: any;
}

export default toNative(Step);
</script>

<style lang="less">
.step {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  container-type: inline-size;

  .header {
    display: flex;
    justify-content: space-between;

    h2 {
      flex-grow: 1;
    }
  }

  .content {
    flex-grow: 1;

    display: flex;
    gap: 5vw;

    .image,
    .instructions {
      height: 100%;
    }

    .image {
      img {
        height: 70vh;
      }
    }

    .instructions {
      flex-grow: 1;

      .sub-step {
        margin-bottom: 1rem;

        span {
          font-family: "Merriweather", serif;
        }
      }
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }

  @container (width < 600px) {

    .header {
      h2 {
        font-size: 2rem;
      }
    }

    .content {
      flex-direction: column;
    }

    .actions {
      border-top: 1px solid grey;
      padding-top: 1rem;
    }

  }
}
</style>