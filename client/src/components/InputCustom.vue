<template>
  <div class="input-box" :style="{ width: width }">
    <p v-if="label !== null">{{ label }}</p>
    <div>
      <input
        class="custom"
        :type="type"
        :placeholder="place"
        :readonly="read"
        :value="value"
        @input="update"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCustom",
  data() {
    return {
      //   value: this.modelValue,
    };
  },
  props: {
    modelValue: null,
    width: String,
    label: {
      type: String,
      default: null,
    },
    read: {
      default: false,
      type: Boolean,
    },
    place: String,
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    update($e) {
      this.$emit("update:modelValue", $e.target.value);
    },
  },
  computed: {
    value: function () {
      return this.modelValue;
    },
  },
  //   watch: {
  //     modelValue() {
  //       this.value = this.modelValue;
  //     },
  //   },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables";
.input-box {
  input.custom {
    height: 32px;
  }
}
</style>
