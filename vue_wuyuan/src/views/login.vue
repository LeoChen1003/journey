<template>
    <div class="login">
        <div class="form">
            <el-tabs v-model="activeTab" class="tabs">
                <el-tab-pane label="游客登录" name="first">
                    <el-input v-model="userPhone" placeholder="请输入手机号" style="width:260px;margin-top: 50px;" @blur="testPhone"></el-input>
                    <br>
                    <el-input v-model="userPwd" placeholder="请输入密码" show-password style="width:260px;margin-top: 20px;"></el-input>
                    <br>
                    <el-button type="primary" style="width: 260px;margin-top: 20px;" @click="userLogin">登  录</el-button>
                    <p class="register">还没有账号?<span @click="register">注册</span></p>
                </el-tab-pane>
                <el-tab-pane label="管理员登录" name="second">
                    <el-input v-model="adminPhone" placeholder="请输入手机号" style="width:260px;margin-top: 50px;" @blur="testPhone1"></el-input>
                    <br>
                    <el-input v-model="adminPwd" placeholder="请输入密码" show-password style="width:260px;margin-top: 20px;"></el-input>
                    <br>
                    <el-button type="primary" style="width: 260px;margin-top: 20px;" @click="adminLogin">登  录</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'first',
      userPhone: '',
      userPwd: '',
      adminPhone: '',
      adminPwd: ''
    }
  },
  methods: {
    userLogin () {
      var phone = this.userPhone
      var upwd = this.userPwd
      // 发送ajax请求
      var url = 'login'
      var obj = {phone: phone, upwd: upwd}
      this.axios.get(url, {params: obj}).then(res => {
        console.log(res.data)
        if (res.data.code < 0) {
          this.$message({type: 'error', message: '手机号或密码不正确'})
        } else {
          this.$router.push('/user/index')
        }
      })
    },
    adminLogin () {
      var phone = this.adminPhone
      var upwd = this.adminPwd
      // 发送ajax请求
      var url = 'adminLogin'
      var obj = {phone: phone, upwd: upwd}
      this.axios.get(url, {params: obj}).then(res => {
        console.log(res.data)
        if (res.data.code < 0) {
          this.$message({type: 'error', message: '手机号或密码不正确'})
        } else {
          this.$router.push('/admin/index')
        }
      })
    },
    testPhone () {
      var phone = this.userPhone
      let reg = /^1[3456789][0-9]{9}$/
      if (!reg.test(phone)) {
        this.$message({type: 'warning', message: '手机号码格式不正确'})
      }
    },
    testPhone1 () {
      var phone1 = this.adminPhone
      let reg = /^1[3456789][0-9]{9}$/
      if (!reg.test(phone1)) {
        this.$message({type: 'warning', message: '手机号码格式不正确'})
      }
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
    width: 100vw;
    height: 100vh;
    background: url('../assets/login.jpg');
    background-size: 1360px auto;
    overflow: hidden;
    .form{
        width: 400px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 100px;
        overflow: hidden;
        .tabs{
            margin-top: 20px;
            .register{
              margin-top: 15px;
              font-size: 14px;
              span{
                margin-left: 5px;
                color: #63a3f8;
                cursor: pointer;
              }
            }
        }
    }
}
</style>

<style>
*{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.el-tabs__nav{
    float: none;
    width: 200px;
    margin: 0 auto;
}
.el-tabs__item{
    font-size: 16px;
    padding: 0px 28px;
}
.el-tabs__active-bar{
    width: 65px;
    height: 3px;
}
</style>
