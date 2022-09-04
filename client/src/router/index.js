import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/admin/login",
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("../pages/admin/login/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../pages/admin/layout/Admin.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../pages/admin/dashboard/Dashboard.vue"),
        meta: {
          title: "대시보드",
        },
      },
      {
        path: "user",
        name: "AdminUser",
        component: () => import("../pages/admin/user/AdminUser.vue"),
        meta: {
          title: "사용자 관리",
        },
      },
      {
        path: "product",
        name: "AdminProduct",
        component: () => import("../pages/admin/product/AdminProduct.vue"),
        meta: {
          title: "상품 관리",
        },
      },
      {
        path: "notice",
        name: "AdminNotice",
        component: () => import("../pages/admin/notice/AdminNotice.vue"),
        meta: {
          title: "공지사항",
        },
      },
      {
        path: "category",
        name: "Category",
        component: () => import("../pages/admin/category/Category.vue"),
        meta: {
          title: "카테고리 관리",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
