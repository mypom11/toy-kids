<template>
  <section>
    <article class="card">
      <InputCustom
        label="제목"
        class="w-100 mb-20"
        v-model="noticeData.title"
      />
      <div class="detail-info">
        <div class="editor">
          <QullNotice ref="editor" v-model="noticeData.detail" />
        </div>
      </div>
      <div class="btn-box">
        <button class="btn gray" @click="$router.push({ name: 'AdminNotice' })">
          취소
        </button>
        <button class="btn" @click="addNotice">공지사항 등록</button>
      </div>
    </article>
  </section>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import QullNotice from "../../../components/QullNotice.vue";
import { addNoticeList } from "@/api/notice";

export default {
  name: "AdminNoticeAdd",
  components: { InputCustom, QullNotice },
  data() {
    return {
      noticeData: {},
    };
  },
  methods: {
    async addNotice() {
      await this.$refs.editor.saveContent();
      addNoticeList(this.noticeData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
.btn-box {
  text-align: right;
  margin-top: 20px;
  button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.editor {
  height: 600px;
}
</style>
