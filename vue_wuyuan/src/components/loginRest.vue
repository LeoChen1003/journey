<template>
    <div>
        <div class="span">
          <span class="login" @click="login">登录</span>
          <span>|</span>
          <span class="register" @click="register">注册</span>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.span{
    position: absolute;
    right: 150px;
    width: 100px;
    top: 18px;
    .login,.register{
      cursor:pointer;
      color:#91c3fc;
      font-size: 14px;
    }
  }
</style>
