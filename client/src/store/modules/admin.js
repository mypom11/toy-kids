export const admin = {
  namespaced: true,
  state: {
    adminNav: [
      {
        title: "대시보드",
        link: "dashboard",
        icon: "chart-simple",
      },
      {
        title: "사용자 관리",
        link: "user",
        icon: "user",
      },
      {
        title: "상품 관리",
        link: "product",
        icon: "gift",
      },
      {
        title: "공지사항",
        link: "notice",
        icon: "flag",
      },
      {
        title: "카테고리 관리",
        link: "category",
        icon: "gear",
      },
    ],
    isSidebar: true,
  },
  getter: {},
  mutations: {
    CHANGE_SIDEBAR(state) {
      state.isSidebar = !state.isSidebar;
    },
  },
  actions: {},
};
