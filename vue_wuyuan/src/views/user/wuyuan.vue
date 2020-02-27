<template>
    <div class="wuyuan">
        <header-nav></header-nav>
        <login-rest></login-rest>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}"> 目的地 </el-breadcrumb-item>
            <el-breadcrumb-item>婺源</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="center">
            <div class="text">
                <p>婺源</p>
                <p>WUYUAN</p>
                <p>婺源既有徽派建筑的沧桑与厚重，也有江南水乡的清新与哀怨，用一年四季动人的画面展现着"中国最美乡村"的风采</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="spot" @click="getSpot">旅游景点</div>
        <div class="content">
            <div class="spot_info" v-for="(item,i) of spotInfo" :key="i">
                <img :src="require(`../../assets/wuyuan/${item.img}`)" alt="" class="pic">
                <p>{{item.sName}}</p>
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '@/components/nav.vue'
import loginRest from '@/components/loginRest.vue'
export default {
  data () {
    return {
      pic1: 1,
      spotInfo: []
    }
  },
  components: {
    headerNav,
    loginRest
  },
  methods: {
    getSpot () {
      var url = 'spotInfo'
      this.axios.get(url).then(res => {
        this.spotInfo = res.data
        console.log(this.spotInfo)
      })
    }
  },
  beforeCreate () {
    var url = 'spotInfo'
    this.axios.get(url).then(res => {
      this.spotInfo = res.data
      console.log(this.spotInfo)
    })
  }
}
</script>

<style lang="scss" scoped>
.wuyuan{
    .center{
        width: 1050px;
        height: 470px;
        background:url("../../assets/wuyuan/index.jpg");
        margin: 0 auto;
        background-position: center;
        background-size: cover;
        margin-top: 20px;
        position: relative;
        .text{
            width: 300px;
            height: 180px;
            background-color: rgba(0,0,0,0.5);
            position: absolute;
            top: 200px;
            right: 50px;
            p{
                color: #fff;
                margin-top: 15px;
            }
            p:first-child{
                font-size: 24px;
            }
            p:nth-child(2){
                font-size: 20px;
            }
            p:last-child{
                line-height: 1.6;
            }
        }
    }
    .line{
        width: 1050px;
        height: 1px;
        background-color: #ccc;
        margin: 0 auto;
        margin-top: 30px;
    }
    .spot{
        width:100px;
        height: 50px;
        background-color: #fff;
        color: #6cd6e9;
        margin: 0 auto;
        margin-top: -13px;
    }
    .content{
        width: 1050px;
        // height: 400px;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content:space-between;
        padding-bottom: 20px;
        .spot_info{
            width: 250px;
            height: 350px;
            position: relative;
            overflow: hidden;
            .pic{
                width: 250px;
                height: 350px;
                position: absolute;
                left: 0;
                top: 0;
                cursor: pointer;
                transition: all 2s;
            }
            .pic:hover{
                transform: scale(1.35);
            }
            p{
                color: #fff;
                position: absolute;
                left: 20px;
            }
            p:nth-child(2){
                bottom: 70px;
                font-size: 20px;
            }
            p:last-child{
                bottom: 40px;
                font-size: 14px;
            }
        }
    }
}
</style>

<style scoped>
*{
    margin:0;
    padding:0;
}
.el-breadcrumb{
    margin-left: 155px;
    margin-top: 20px;
}
</style>
