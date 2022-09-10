<template>
  <section>
    <article class="card">
      <div class="search-box">
        <SelectCustom place="장르 선택" />
        <SelectCustom place="사용 나이 선택" />
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
              <td>{{ list.gerne }}</td>
              <td>{{ list.ages }}</td>
              <td>비대여</td>
              <td>-</td>
              <td>{{ list.like }}회</td>
              <td>{{ list.comment.length }}개</td>
              <td class="link">
                <p>출력 하기</p>
              </td>
              <td class="link">
                <p>상세 보기</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn">상품 등록</button>
      </div>
      <Pagination />
    </article>
  </section>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import Pagination from "../../../components/Pagination.vue";
import SelectCustom from "@/components/SelectCustom.vue";
import { getProductList } from "@/api/product";
import { _setDate } from "@/common/common";

export default {
  name: "AdminProduct",
  components: { InputCustom, Pagination, SelectCustom },
  created() {
    this.getProductList();
  },
  data() {
    return {
      productList: null,
      setDate: _setDate,
    };
  },
  methods: {
    async getProductList() {
      this.productList = await getProductList();
      console.log(this.productList);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
