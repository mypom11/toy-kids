<template>
  <article id="modal">
    <div class="modal-wrap" :style="{ width: width, height: height }">
      <div class="modal-head">
        <h2>{{ title }}</h2>
        <span class="close-icon" @click="modalClose"
          ><font-awesome-icon :icon="['fas', 'xmark']"
        /></span>
      </div>
      <div class="modal-desc">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    width: String,
    height: String,
    title: String,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  created() {
    this.scrollPosition = window.pageYOffset;
    document.querySelector("body").classList.add("overflow");
    document.querySelector("body").style.top = `-${this.scrollPosition}px`;
  },
  unmounted() {
    document.querySelector("body").classList.remove("overflow");
    window.scrollTo(0, this.scrollPosition);
  },
  methods: {
    modalClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables";
#modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 301;
  @include flex(center, center);
  background: none;
  .modal-wrap {
    min-width: 320px;
    background: $white;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    .modal-head {
      height: 60px;
      padding: 0 30px;
      @include flex;
      h2 {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .modal-desc {
      max-height: calc(100vh - 300px);
      overflow-y: auto;
      background: $white;
      padding: 30px;
    }
    @include tablet {
      .modal-desc {
        padding: 20px;
      }
    }
    @include mobile {
      max-width: calc(100% - 32px);
    }
  }
}
.close-icon {
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: $black;
  font-size: 20px;
  &:hover {
    opacity: 0.5;
  }
}
</style>
