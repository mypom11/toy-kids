<template>
  <section>
    <article class="card">
      <div class="basic-info">
        <div class="thumb">
          <p>상품 썸네일</p>
          <InputFile />
        </div>
        <ul>
          <li>
            <InputCustom label="상품명" />
          </li>
          <li>
            <SelectCustom label="장르" />
            <SelectCustom label="사용 나이" />
          </li>
        </ul>
      </div>
      <div class="detail-info">
        <p>상세 정보</p>
        <div class="editor">
          <QullComponent />
        </div>
      </div>
      <div class="btn-box">
        <button
          class="btn gray"
          @click="$router.push({ name: 'AdminProduct' })"
        >
          취소
        </button>
        <button class="btn">상품 등록</button>
      </div>
    </article>
  </section>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import SelectCustom from "@/components/SelectCustom.vue";
import QullComponent from "../../../components/QullComponent.vue";
import InputFile from "@/components/InputFile.vue";
export default {
  name: "AdminProductAdd",
  components: { InputCustom, SelectCustom, QullComponent, InputFile },
  created() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.basic-info {
  gap: 20px;
  @include flex(flex-start, flex-start);
  .thumb {
    p {
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
  ul {
    > li {
      ::v-deep {
        .input-box {
          flex: 1;
        }
      }
      @include flex(flex-start);
      gap: 20px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.detail-info {
  margin-top: 20px;
  p {
    font-weight: 500;
    margin-bottom: 10px;
  }
  .editor {
    height: 500px;
  }
}

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
</style>
