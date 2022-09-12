<template>
  <div ref="editor" id="editor"></div>
  <button @click="saveContent">save</button>
  <button @click="setContent">test</button>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";

export default {
  mounted() {
    Quill.register("modules/imageUploader", ImageUploader, true);
    const editor = this.$refs.editor;
    this.quill = new Quill(editor, this.options);
  },
  data() {
    return {
      options: {
        modules: {
          toolbar: [
            [
              {
                font: [],
              },
            ],
            [
              {
                header: [1, 2, 3, 4, 5, 6, false],
              },
            ],
            ["bold", "underline"],
            [
              {
                list: "ordered",
              },
              {
                list: "bullet",
              },
            ],
            [
              {
                color: [],
              },
              {
                background: [],
              },
            ],
            [
              {
                align: [],
              },
            ],
            ["image"],
          ],
          imageUploader: {
            upload: (file) => {
              let resultPath = null;

              const imgFile = new FormData();
              imgFile.append("imgFile", file);
              return new Promise((resolve) => {
                axios
                  .post(
                    "http://localhost:4000/api/product/addDetailImg",
                    imgFile
                  )
                  .then((result) => {
                    resultPath = result.data;
                  });
                setTimeout(() => {
                  resolve(`http://localhost:4000/${resultPath}`);
                }, 3500);
              });
            },
          },
        },
        placeholder: "내용을 입력해주세요.",
        readOnly: false,
        theme: "snow",
      },
      quill: null,
      value: "",
    };
  },
  methods: {
    saveContent() {
      console.log(this.quill.root.innerHTML);
    },
    setContent() {
      const test = "<p>asdasdasd</p>";
      const aaa = this.quill.clipboard.convert(test);
      this.quill.setContents(aaa);
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
#editor {
  height: calc(100% - 42px);
}
</style>
