<template>
  <section>
    <article class="card">
      <div class="search-box">
        <SelectCustom place="장르 선택" :option="category.gerne" />
        <SelectCustom place="사용 나이 선택" :option="category.ages" />
        <InputCustom place="상품명을 입력해주세요." />
        <button class="search-btn">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>상품 등록일</th>
              <th>상품 이름</th>
              <th>상품 장르</th>
              <th>사용 나이</th>
              <th>대여 상태</th>
              <th>반납 예정일</th>
              <th>좋아요 수</th>
              <th>댓글 갯수</th>
              <th>QR출력</th>
              <th>상세 정보</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, i) in productList" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ setDate(list.registDate) }}</td>
              <td>{{ list.name }}</td>
              <td>{{ getCategory(category.gerne, list.gerne) }}</td>
              <td>{{ getCategory(category.ages, list.ages) }}</td>
              <td>비대여</td>
              <td>-</td>
              <td>{{ list.like }}회</td>
              <td>{{ list.comment.length }}개</td>
              <td class="link">
                <p>출력 하기</p>
              </td>
              <td class="link">
                <p @click="openDetail(list._id)">상세 보기</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn" @click="$router.push({ name: 'AdminProductAdd' })">
          상품 등록
        </button>
      </div>
      <Pagination />
    </article>
    <Transition name="scale">
      <Modal
        v-if="detailModal"
        title="상품 상세 정보"
        @close="detailModal = false"
      >
        <ProductDetail :detail="detail" />
      </Modal>
    </Transition>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("admin");

import InputCustom from "@/components/InputCustom.vue";
import Pagination from "../../../components/Pagination.vue";
import SelectCustom from "@/components/SelectCustom.vue";
import { getProductDetail, getProductList } from "@/api/product";
import { _setDate, _getCategory } from "@/common/common";
import Modal from "@/components/Modal.vue";
import ProductDetail from "../../../components/ProductDetail.vue";

export default {
  name: "AdminProduct",
  components: { InputCustom, Pagination, SelectCustom, Modal, ProductDetail },
  created() {
    this.getProductList();
    this.$store.dispatch("admin/GET_CATEGORY");
  },
  data() {
    return {
      productList: null,
      setDate: _setDate,
      detailModal: false,
      detail: {},
    };
  },
  methods: {
    async getProductList() {
      this.productList = await getProductList();
    },
    async openDetail(product) {
      const detailData = await getProductDetail(product);
      this.detail = detailData;
      this.detailModal = true;
    },
    getCategory(obj, id) {
      return _getCategory(obj, id);
    },
  },

  computed: {
    ...mapState(["category"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
