<template>
    <div class="admin">
        <el-row class="tac">
            <el-col :span="4" style="background-color: #409EFF">
                <p class="title">旅游信息管理系统</p>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose" background-color="#409EFF" text-color="#e7e7e7" active-text-color="#fff">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">用户信息管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>商家管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">商家管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <span>订单模块</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">酒店订单</el-menu-item>
                            <el-menu-item index="1-2">门票订单</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">酒店信息管理</el-menu-item>
                            <el-menu-item index="1-2">景点信息管理</el-menu-item>
                            <el-menu-item index="1-3">美食信息管理</el-menu-item>
                            <el-menu-item index="1-4">旅游线路信息管理</el-menu-item>
                            <el-menu-item index="1-5">游记信息管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <span>投诉管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">投诉管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="background-color: #888;">
                <div class="header"></div>
                <template>
                    <el-table :data="userData" style="width:100%">
                        <el-table-column prop="userName" label="姓名"></el-table-column>
                        <el-table-column prop="uname" label="昵称"></el-table-column>
                        <el-table-column prop="sex" label="性别"></el-table-column>
                        <el-table-column prop="upwd" label="密码"></el-table-column>
                        <el-table-column prop="cardId" label="身份证号码"></el-table-column>
                        <el-table-column prop="phone" label="手机号码"></el-table-column>
                        <el-table-column prop="seat" label="地址"></el-table-column>
                    </el-table>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userData: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    var url = 'userInfo'
    this.axios.get(url).then(res => {
      this.userData = res.data
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
.admin{
    .title{
        color: #fff;
        font-size: 20px;
        margin-top: 10px;
    }
    .header{
        width: 100%;
        height: 50px;
        background-color: #ccc;
    }
}
</style>

<style scoped>
.el-menu{
    border-right: 0px;
    margin-top: 30px;
}
.el-submenu__title i{
    color: #fff !important;
}
.el-submenu__title span{
    margin-left: -120px;
}
.el-col{
    height: 100vh;
}
</style>
