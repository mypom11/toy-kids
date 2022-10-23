import { getCategoryList } from "@/api/category";

export const admin = {
  namespaced: true,
  state: {
    adminNav: [
      //   {
      //     title: "대시보드",
      //     link: "Dashboard",
      //     icon: "chart-simple",
      //   },
      {
        title: "사용자 관리",
        link: "AdminUser",
        icon: "user",
      },
      {
        title: "상품 관리",
        link: "AdminProduct",
        icon: "gift",
      },
      {
        title: "공지사항",
        link: "AdminNotice",
        icon: "flag",
      },
      {
        title: "카테고리 관리",
        link: "Category",
        icon: "gear",
      },
    ],
    isSidebar: true,
    category: {
      gerne: [],
      ages: [],
    },
  },
  getter: {},
  mutations: {
    CHANGE_SIDEBAR(state) {
      state.isSidebar = !state.isSidebar;
    },
    SET_CATEGORY(state, payload) {
      state.category = payload;
    },
  },
  actions: {
    async GET_CATEGORY({ commit }) {
      let result = await getCategoryList();
      if (result.result === false) {
        commit("SET_CATEGORY", null);
      } else {
        const gerne = result.filter((item) => item.mainCodeName === "gerne");
        const ages = result.filter((item) => item.mainCodeName === "ages");
        console.log(gerne);
        commit("SET_CATEGORY", { gerne: gerne, ages: ages });
      }
    },
  },
};
