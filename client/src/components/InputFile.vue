<template>
  <div class="input-file">
    <label for="ex_filename" :class="{ on: read || preview }">
      <img :src="modelValue" alt="" v-if="modelValue != null && read" />
      <img :src="preview" alt="" v-if="preview && !read" />
    </label>
    <input
      type="file"
      id="ex_filename"
      class="upload-hidden"
      @change="handleChange"
      v-if="!read"
    />
  </div>
</template>

<script>
export default {
  name: "InputFile",
  data() {
    return {
      preview: "",
    };
  },
  props: {
    picture: String,
    read: Boolean,
    modelValue: null,
  },
  methods: {
    handleChange: function (event) {
      var file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg|jpg)$/)) {
        this.preview = window.URL.createObjectURL(file);
        this.$emit("update:modelValue", file);
      } else {
        alert("지원하지 않는 형식의 파일입니다.");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.input-file {
  width: 200px;
  height: 200px;
  &.sm {
    width: 140px;
    height: 140px;
  }
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  label {
    @include flex(center, center);
    padding: 10px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    border: 1px dashed $gray;
    background: rgba($color: $gray, $alpha: 0.1);
    position: relative;
    &.on {
      border: 1px solid $gray;
      background: none;
      &:after {
        display: none;
      }
    }
    &:after {
      content: "사진 첨부";
      color: $gray;
      display: block;
      width: 60px;
      position: absolute;
      font-size: 16px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("~@/assets/images/upload.png") top center no-repeat;
      padding-top: 36px;
      text-align: center;
    }
    img {
      z-index: 10;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      border-radius: 2px;
    }
  }
}
</style>
