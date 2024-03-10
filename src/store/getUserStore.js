// 全局状态配置
import { createStore } from "vuex";
const userStore = createStore({
  // 定义用户登录字段
  state() {
    return {
      username: "",
      password: "",
    };
  },
  getters: {
    isLogin: (state) => {
      return state.username.length > 0;
    },
  },
  mutations: {
    // 清除登录信息
    clearUserInfo(state) {
      state.username = "";
      state.password = "";
    },
    // 获取登录信息
    loginUserInfo(state, { name, password }) {
      state.username = name;
      state.password = password;
    },
  },
});

export default userStore;
