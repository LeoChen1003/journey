<template>
    <div class="register">
        <div class="form">
            <el-input placeholder="请输入昵称" class="ipt" style="margin-top: 70px;" v-model="uname" @blur="testName"></el-input>
            <br>
            <el-input placeholder="请输入手机号" class="ipt" style="margin-top: 10px" v-model="phone" @blur="testPhone"></el-input>
            <br>
            <el-input placeholder="请输入密码(6-16位数字字母组合)" class="ipt" style="margin-top: 10px" show-password v-model="pwd" @blur="testPwd"></el-input>
            <br>
            <el-input placeholder="请确认密码(6-16位数字字母组合)" class="ipt" style="margin-top: 10px" show-password v-model="pwd1" @blur="testPwd1"></el-input>
            <br>
            <el-button class="ipt" style="margin-top: 20px;padding: 12px 40px;" type="primary" @click="register">注册</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      uname: '',
      phone: '',
      pwd: '',
      pwd1: ''
    }
  },
  methods: {
    testName () {
      let name = this.uname
      if (name === '') {
        this.$message({type: 'warning', message: '昵称不能为空'})
      }
    },
    testPhone () {
      let phone = this.phone
      let reg = /^1[3456789][0-9]{9}$/
      if (!reg.test(phone)) {
        this.$message({type: 'warning', message: '手机号码格式不正确'})
      }
    },
    testPwd () {
      let pwd = this.pwd
      let reg = /^[a-zA-Z0-9]{6,16}$/
      if (!reg.test(pwd)) {
        this.$message({type: 'warning', message: '密码必须是6到16位数字、字母组合'})
      }
    },
    testPwd1 () {
      let pwd = this.pwd
      let pwd1 = this.pwd1
      if (pwd1 !== pwd) {
        this.$message({type: 'warning', message: '前后密码不一致'})
      }
    },
    register () {
      let name = this.uname
      let phone = this.phone
      let pwd = this.pwd
      let pwd1 = this.pwd1
      let reg = /^1[3456789][0-9]{9}$/
      let reg1 = /^[a-zA-Z0-9]{6,16}$/
      if (name === '') {
        this.$message({type: 'warning', message: '昵称不能为空'})
      } else if (!reg.test(phone)) {
        this.$message({type: 'warning', message: '手机号码格式不正确'})
      } else if (!reg1.test(pwd)) {
        this.$message({type: 'warning', message: '密码必须是6到16位数字、字母组合'})
      } else if (pwd1 !== pwd) {
        this.$message({type: 'warning', message: '前后密码不一致'})
      }
      // 发送ajax请求
      var url = 'register'
      var obj = {uname: name, phone: phone, upwd: pwd}
      this.axios.get(url, {params: obj}).then(res => {
        console.log(res.data)
        if (res.data.code === 1) {
          this.$message({type: 'success', message: '注册成功'})
        } else {
          this.$message({type: 'error', message: '注册失败'})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
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
        .ipt{
            width: 260px;
        }
    }
}
</style>

<style scoped>
*{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
