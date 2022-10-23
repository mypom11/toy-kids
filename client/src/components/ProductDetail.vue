<template>
  <article>
    <div class="basic-info mb-20">
      <div class="thumb">
        <p>상품 썸네일</p>
        <InputFile v-model="product.thumbnail" read class="sm" />
      </div>
      <ul>
        <li>
          <InputCustom label="상품명" v-model="product.name" read />
        </li>
        <li>
          <SelectCustom
            label="장르"
            v-model="product.gerne"
            :option="category.gerne"
            read
          />
          <SelectCustom
            label="사용 나이"
            v-model="product.ages"
            :option="category.ages"
            read
          />
        </li>
      </ul>
    </div>
    <ul class="tab">
      <li :class="{ active: tabSelect === 0 }" @click="tabSelect = 0">
        상세 정보
      </li>
      <li :class="{ active: tabSelect === 1 }" @click="tabSelect = 1">
        대여 정보
      </li>
    </ul>
    <div class="detail">
      <QuillDetail v-show="tabSelect === 0" ref="detailDesc" />
      <div class="rent-detail" v-show="tabSelect === 1">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>NO.</th>
                <th>대여자</th>
                <th>대여일</th>
                <th>반납예정일</th>
                <th>반납여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>id</td>
                <td>2022.10.22</td>
                <td>2022.10.29</td>
                <td>미반납</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("admin");

import InputFile from "./InputFile.vue";
import SelectCustom from "./SelectCustom.vue";
import InputCustom from "./InputCustom.vue";
import QuillDetail from "./QuillDetail.vue";
export default {
  name: "ProductDetail",
  components: { InputFile, SelectCustom, InputCustom, QuillDetail },
  mounted() {
    this.$refs.detailDesc.setContent(this.product.detail);
  },
  data() {
    return {
      tabSelect: 0,
    };
  },

  methods: {},
  props: {
    detail: Object,
  },
  computed: {
    ...mapState(["category"]),

    product: function () {
      return this.detail;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

article {
  min-width: 800px;
}
.tab {
  padding: 0 20px;
  @include flex(flex-start);
  gap: 10px;
  border-bottom: 1px solid $black;
  > li {
    padding: 4px 10px;
    font-weight: 500;
    cursor: pointer;
    border: {
      radius: 4px 4px 0 0;
      left: 1px solid $black;
      right: 1px solid $black;
      top: 1px solid $black;
    }

    &:hover,
    &.active {
      background: $purple-dark;
      color: $white;
    }
  }
}

.detail {
  height: 500px;
  max-height: 500px;
  overflow-y: auto;
}
.rent-detail {
  border: 1px solid $gray;
  height: 100%;
}
</style>
