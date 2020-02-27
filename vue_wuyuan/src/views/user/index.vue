<template>
    <div class="index">
        <header-nav></header-nav>
        <login-rest></login-rest>
        <div class="background bg_blur">
        </div>
        <div class="sou">
            <el-input v-model="city" style="width: 300px;margin-top:30px;margin-left:-100px;" placeholder="搜目的地"></el-input>
            <el-button type="primary" icon="el-icon-search" style="padding: 10px 15px;position:absolute;right:50px;font-size: 16px;top:30px;" @click="goCity">搜索</el-button>
        </div>
    </div>
</template>

<script>
import headerNav from '@/components/nav.vue'
import loginRest from '@/components/loginRest.vue'
export default {
  data () {
    return {
      city: '',
      spotInfo: [],
      showSpot: false
    }
  },
  components: {
    headerNav,
    loginRest
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    getSpot () {
      var url = 'spotInfo'
      this.axios.get(url).then(res => {
        this.spotInfo = res.data
      })
    },
    goCity () {
      if (this.city === '婺源') {
        this.$router.push({path: '/user/index/wuyuan'})
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.index{
  position: relative;
  .background{
    width: 100%;
    // height: calc(100vh - 61px);
    height: 570px;
    background:url('../../assets/index.jpg');
    position: relative;
  }
  .bg_blur{
    float: left;
    background-size: cover;
    background-position: center;
    filter: blur(3px);
  }
  .sou{
      width: 500px;
      height: 100px;
      background-color: rgba($color: #000, $alpha: 0.5);
      margin: 0 auto;
      position: absolute;
      top: 250px;
      left: 50%;
      margin-left: -250px;
  }
}
</style>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
