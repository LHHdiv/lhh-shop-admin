import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Order from "../pages/Order/order.vue";

import userStore from "../store/getUserStore"; //引入store
// 路由列表
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "order/:type", //动态路由匹配，0是普通订单， 1是秒杀订单
        name: "order",
        component: Order,
      },
    ],
    redirect: "home/order/0",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由拦截
router.beforeEach((users) => {
  // 定义登录状态，判断是否已经登录
  let isLogin = userStore.getters.isLogin;
  if (isLogin || users.name == "login") {
    return true;
  } else {
    return { name: "login" };
  }
});

export default router;
