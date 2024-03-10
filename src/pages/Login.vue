<template>
  <div class="login-container">
    <div class="login-title">
      <h2>商城后台管理系统</h2>
    </div>
    <div class="login-user ipt">
      <el-input v-model="username" placeholder="请输入用户名">
        <template #suffix>
          <el-icon class="el-input__icon">
            <User />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="login-pass ipt">
      <el-input v-model="password" placeholder="请输入登录密码" type="password" show-password>
        <template #suffix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="login-btn ipt">
      <el-button @click="login" style="width:500px" type="primary" :disabled="disabled">登录</el-button>
    </div>
  </div>
</template>
<script>
import userStore from "../store/getUserStore";
import { ElMessage } from "element-plus";
export default {
  name: "Login",
  data() {
    return {
      username: "LHH",
      password: "123456"
    }
  },
  computed: {
    disabled() {
      return this.username.length == 0 || this.password.length == 0
    }
  },
  methods: {
    login() {
      userStore.commit('loginUserInfo', {
        name: this.username,
        password: this.password
      })
      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 3000
      })
      this.$router.push({ name: 'home' })
    }
  }
};
</script>

<style scoped>
.login-container {
  background: #595959;
  height: 100%;
  width: 100%;
  position: absolute;
}

.login-title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}

.ipt {
  margin: 20px auto;
  width: 500px;
}
</style>