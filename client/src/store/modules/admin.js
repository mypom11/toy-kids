export const admin = {
  namespaced: true,
  state: {
    adminNav: [
      {
        title: "대시보드",
        link: "Dashboard",
        icon: "chart-simple",
      },
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
  },
  getter: {},
  mutations: {
    CHANGE_SIDEBAR(state) {
      state.isSidebar = !state.isSidebar;
    },
  },
  actions: {},
};
