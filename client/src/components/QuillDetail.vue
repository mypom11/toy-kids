<template>
  <div ref="editor" id="editor"></div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  mounted() {
    const editor = this.$refs.editor;
    this.quill = new Quill(editor, this.options);
  },
  data() {
    return {
      options: {
        modules: {
          toolbar: false,
        },
        placeholder: "내용을 입력해주세요.",
        readOnly: true,
        theme: "snow",
      },
      quill: null,
      value: "",
    };
  },
  props: {
    modelValue: String,
  },
  methods: {
    setContent(desc) {
      const data = this.quill.clipboard.convert(desc);
      this.quill.setContents(data);
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
#editor {
  height: calc(100%);
}
</style>
