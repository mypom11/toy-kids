<template>
  <section>
    <article class="card">
      <div class="basic-info">
        <div class="thumb">
          <p>상품 썸네일</p>
          <InputFile v-model="product.imgFile" />
        </div>
        <ul>
          <li>
            <InputCustom label="상품명" v-model="product.name" />
          </li>
          <li>
            <SelectCustom
              label="장르"
              v-model="product.gerne"
              :option="category.gerne"
            />
            <SelectCustom
              label="사용 나이"
              v-model="product.ages"
              :option="category.ages"
            />
          </li>
        </ul>
      </div>
      <div class="detail-info">
        <p>상세 정보</p>
        <div class="editor">
          <QullComponent v-model="product.detail" ref="editor" />
        </div>
      </div>
      <div class="btn-box">
        <button
          class="btn gray"
          @click="$router.push({ name: 'AdminProduct' })"
        >
          취소
        </button>
        <button class="btn" @click="addProduct">상품 등록</button>
      </div>
    </article>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("admin");

import InputCustom from "@/components/InputCustom.vue";
import SelectCustom from "@/components/SelectCustom.vue";
import QullComponent from "../../../components/QullComponent.vue";
import InputFile from "@/components/InputFile.vue";
import { addProductList } from "@/api/product";

export default {
  name: "AdminProductAdd",
  components: { InputCustom, SelectCustom, QullComponent, InputFile },

  data() {
    return {
      product: {},
    };
  },
  methods: {
    async addProduct() {
      await this.$refs.editor.saveContent();
      addProductList(this.product);
    },
  },
  computed: {
    ...mapState(["category"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

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
