<template>
  <ul>
    <li
      class="arrow"
      :class="{ disabled: page.nowPage === 1 }"
      @click="$emit('changePage', page.nowPage - 1)"
    >
      <font-awesome-icon :icon="['fas', 'angle-left']" />
    </li>
    <li
      v-for="(list, i) in pageData"
      :key="i"
      @click="$emit('changePage', list)"
      :class="{ active: page.nowPage == list }"
    >
      {{ list }}
    </li>
    <li v-if="pageData == ''" class="disabled">1</li>
    <li
      class="arrow"
      :class="{ disabled: page.nowPage == page.totalPage || pageData == '' }"
      @click="$emit('changePage', page.nowPage + 1)"
    >
      <font-awesome-icon :icon="['fas', 'angle-right']" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  data() {
    return {
      //   pageData: [],
    };
  },
  props: {
    page: {
      type: Object,
      default() {
        return { nowPage: 1, totalPage: 1 };
      },
    },
  },
  //   mounted() {
  //     this.makePagi();
  //   },
  methods: {
    // makePagi() {
    //   this.pageData = [];
    //   const arr = [];
    //   for (let i = this.page.startPage; i <= this.page.endPage; i++) {
    //     arr.push(i);
    //   }
    //   this.pageData = arr;
    // },
  },
  computed: {
    pageData: function () {
      const arr = [];
      for (let i = this.page.startPage; i <= this.page.endPage; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables";
ul {
  width: 100%;
  @include flex(center, center);
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  > li {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 50%;
    &.disabled {
      pointer-events: none;
      opacity: 0.3;
    }
    &.active {
      color: $blue;
      font-weight: 700;
      font-size: 14px;
      background: rgba($color: $blue, $alpha: 0.1);
    }
    &:hover {
      color: $blue;
      font-weight: 700;
    }
    &.arrow {
      @include flex(center, center);
      &:first-child {
        margin-right: 15px;
      }
      &:last-child {
        margin-left: 15px;
      }
    }
  }
}
</style>
