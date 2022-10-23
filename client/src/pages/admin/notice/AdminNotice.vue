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
            <tr v-for="(list, i) in noticeList" :key="i">
              <td>{{ i + 1 }}</td>
              <td class="link">
                <p @click="openDetail(list._id)">{{ list.title }}</p>
              </td>
              <td>{{ setDate(list.registDate) }}</td>
              <td>{{ useYnKo(list.useYn) }}</td>
            </tr>
            <tr v-if="noticeList.length === 0">
              <td colspan="4">조회된 공지사항이 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-20">
        <button class="btn" @click="$router.push({ name: 'AdminNoticeAdd' })">
          공지 등록
        </button>
      </div>
      <Pagination />
    </article>
    <Transition name="scale">
      <Modal
        v-if="detailModal"
        title="공지사항 상세 정보"
        @close="detailModal = false"
      >
        <NoticeDetail :data="detailData" />
      </Modal>
    </Transition>
  </section>
</template>

<script>
import Pagination from "../../../components/Pagination.vue";
import { getNoticeList, getNoticeDetail } from "@/api/notice";
import { _setDate } from "@/common/common";
import Modal from "@/components/Modal.vue";
import NoticeDetail from "../../../components/NoticeDetail.vue";

export default {
  name: "AdminUser",
  components: { Pagination, Modal, NoticeDetail },
  data() {
    return {
      noticeList: [],
      setDate: _setDate,
      detailModal: false,
      detailData: {},
    };
  },
  created() {
    this.getNoticeList();
    console.log(this.noticeList);
  },

  methods: {
    async getNoticeList() {
      const result = await getNoticeList();
      console.log(result);
      if (result === false) {
        this.noticeList = [];
      } else {
        this.noticeList = result;
      }
    },

    async openDetail(id) {
      const detailData = await getNoticeDetail(id);
      this.detailData = detailData;
      this.detailModal = true;
    },

    useYnKo(useYn) {
      if (useYn === "Y") {
        return "게시중";
      } else if (useYn === "N") {
        return "게시 종료";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
