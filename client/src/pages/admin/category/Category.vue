<template>
  <section>
    <article class="card">
      <h3>대표 카테고리</h3>
      <ul class="list">
        <li class="active">상품 장르</li>
        <li>사용 나이</li>
      </ul>
    </article>
    <article class="card">
      <h3>상세 카테고리</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>사용 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>퍼즐</td>
              <td>사용중</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn">신규 등록</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "AdminUser",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

section {
  @include flex(flex-start, stretch);
  gap: 20px;
  .card {
    &:first-child {
      width: 400px;
    }
    &:last-child {
      flex: 1;
    }
  }
}

h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
