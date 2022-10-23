<template>
  <section>
    <article class="card">
      <h3>대표 카테고리</h3>
      <ul class="list">
        <li
          :class="{ active: mainSelect === 'gerne' }"
          @click="mainSelect = 'gerne'"
        >
          상품 장르
        </li>
        <li
          :class="{ active: mainSelect === 'ages' }"
          @click="mainSelect = 'ages'"
        >
          사용 나이
        </li>
      </ul>
    </article>
    <article class="card" style="flex: 1">
      <h3>상세 카테고리</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, i) in categoryList" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ list.subCode }}</td>
              <td class="link">
                <p @click="delCategory(list._id)">삭제하기</p>
              </td>
            </tr>
            <tr v-if="categoryList === null">
              <td colspan="3">조회된 리스트가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn" @click="addModal = true">신규 등록</button>
      </div>
    </article>
    <Transition name="scale">
      <Modal
        v-if="addModal"
        title="세부코드 신규 등록"
        @close="addModal = false"
      >
        <div class="form">
          <InputCustom
            place="코드 이름을 입력해 주세요"
            width="100%"
            v-model="newCategory"
          />
          <div class="mt-20 text-right">
            <button class="btn mr-10" @click="addCategory">저장</button>
            <button class="btn gray" @click="addModal = false">취소</button>
          </div>
        </div>
      </Modal>
    </Transition>
  </section>
</template>

<script>
import Modal from "@/components/Modal.vue";
import InputCustom from "@/components/InputCustom.vue";
import {
  getCategoryList,
  addCategoryList,
  delCategoryList,
} from "@/api/category";
export default {
  name: "AdminUser",
  components: { Modal, InputCustom },
  data() {
    return {
      addModal: false,
      mainSelect: "gerne",
      categoryList: [],
      newCategory: null,
    };
  },
  created() {
    this.getCategoryList();
  },
  methods: {
    async getCategoryList() {
      const result = await getCategoryList(this.mainSelect);
      if (result.result === false) {
        this.categoryList = null;
      } else {
        this.categoryList = result;
      }
    },

    async addCategory() {
      if (this.newCategory === null) {
        alert("카테고리 이름은 필수 사항입니다.");
      } else {
        const cateData = {
          mainCodeName: this.mainSelect,
          subCode: this.newCategory,
          useYn: "Y",
        };
        await addCategoryList(cateData);
        this.newCategory = null;
        this.addModal = false;
        await this.getCategoryList();
      }
    },

    delCategory(id) {
      const cateId = { id: id };
      delCategoryList(cateId);
      this.getCategoryList();
    },
  },

  watch: {
    mainSelect() {
      this.getCategoryList();
    },
  },
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
