<template>
  <section>
    <article class="card">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>제목</th>
              <th>등록일</th>
              <th>게시 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="link"><p>홍길동</p></td>
              <td>2022.08.30</td>
              <td>게시중</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn">공지 등록</button>
      </div>
      <Pagination />
    </article>
  </section>
</template>

<script>
import Pagination from "../../../components/Pagination.vue";

export default {
  name: "AdminUser",
  components: { Pagination },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
