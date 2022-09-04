<template>
  <section>
    <article class="card">
      <div class="search-box">
        <InputCustom place="검색어를 입력해주세요." />
        <button class="search-btn">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>이름</th>
              <th>EMAIL</th>
              <th>휴대폰번호</th>
              <th>최근 대여일</th>
              <th>총 대여 횟수</th>
              <th>반납 미준수 횟수</th>
              <th>상세 정보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>test@gmail.com</td>
              <td>01012341234</td>
              <td>2022.08.30</td>
              <td>3회</td>
              <td>0회</td>
              <td class="link">
                <p>상세 보기</p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>홍길동</td>
              <td>test@gmail.com</td>
              <td>01012341234</td>
              <td>2022.08.30</td>
              <td>3회</td>
              <td>0회</td>
              <td class="link">
                <p>상세 보기</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </article>
  </section>
</template>

<script>
import InputCustom from "@/components/InputCustom.vue";
import Pagination from "../../../components/Pagination.vue";

export default {
  name: "AdminUser",
  components: { InputCustom, Pagination },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
