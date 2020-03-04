<template>
    <div class="admin">
        <el-row class="tac">
            <el-col :span="4" style="background-color: #fff">
                <p class="title">Admin</p>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose" background-color="#fff" text-color="#888" unique-opened>
                    <el-submenu index="1">
                        <template slot="title">
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1" @click="showUser">用户信息管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>商家管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">商家管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <span>订单模块</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">酒店订单</el-menu-item>
                            <el-menu-item index="3-2">门票订单</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1" @click="getHotel">酒店信息管理</el-menu-item>
                            <el-menu-item index="4-2">景点信息管理</el-menu-item>
                            <el-menu-item index="4-3">美食信息管理</el-menu-item>
                            <el-menu-item index="4-4">旅游线路信息管理</el-menu-item>
                            <el-menu-item index="4-5">游记信息管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <span>投诉管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">投诉管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <div class="header"></div>
                <template v-if="userInfo">
                    <el-table :data="userData" style="width:100%;" border>
                        <el-table-column prop="userName" label="姓名" width="100px"></el-table-column>
                        <el-table-column prop="uname" label="昵称" width="120px"></el-table-column>
                        <el-table-column prop="sex" label="性别" width="50px"></el-table-column>
                        <el-table-column prop="upwd" label="密码"></el-table-column>
                        <el-table-column prop="cardID" label="身份证号码"></el-table-column>
                        <el-table-column prop="phone" label="手机号码"></el-table-column>
                        <el-table-column prop="seat" label="地址"></el-table-column>
                        <el-table-column label="订单数量" width="80">
                            <template slot-scope="scope">
                                <p style="cursor:pointer">{{scope.row.orderCount}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="是否实名制" width="100px">
                            <template slot-scope="scope">
                                <p v-if="scope.row.isReal===1">是</p>
                                <p v-else>否</p>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
                <template v-if="hotelInfo">
                    <el-input placeholder="请输入城市" style="width:200px;margin-top:20px;" v-model="city"></el-input>
                    <el-button type="primary" style="margin-left:20px;" @click="getHotel">搜索</el-button>
                    <el-input placeholder="请输入酒店" style="width:200px;margin-left:100px;" v-model="hotelName"></el-input>
                    <el-button type="primary" style="margin-left:20px;" @click="getHotel">搜索</el-button>
                    <el-button type="primary" style="margin-left:70px;" @click="addHotelInfo">增加酒店信息</el-button>
                    <el-table :data="hotelData" style="width:100%;margin-top:20px;" border v-loading="loading">
                        <el-table-column prop="hName" label="酒店名称" width="130"></el-table-column>
                        <el-table-column prop="city" label="城市" width="60"></el-table-column>
                        <el-table-column prop="hAddress" label="地址"></el-table-column>
                        <el-table-column label="房间类型" width="150">
                            <template slot-scope="scope">
                                <p v-for="(item,i) of scope.row.type" :key="i">{{item}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="房型对应价格" width="120">
                            <template slot-scope="scope">
                                <p v-for="(item,i) of scope.row.price" :key="i">{{item}}元</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary">编辑</el-button>
                                <el-button type="primary" @click="deleteHotelInfo(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
                <el-dialog title="增加酒店信息" :visible.sync="addHotel">
                    <el-form label-position="right" label-width="100px" :model="formHotel">
                        <el-form-item label="酒店名称">
                            <el-input v-model="formHotel.hName" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-form-item label="所在城市">
                            <el-input v-model="formHotel.city" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input v-model="formHotel.hAddress" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-button type="primary" style="width:200px">添加</el-button>
                    </el-form>
                </el-dialog>
                <el-dialog title="修改酒店信息" :visible.sync="modifyHotel">
                    <el-form label-position="right" label-width="100px" :model="updateHotelInfo">
                        <el-form-item label="酒店名称">
                            <el-input v-model="updateHotelInfo.hName" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-form-item label="所在城市">
                            <el-input v-model="updateHotelInfo.city" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input v-model="updateHotelInfo.hAddress" style="width: 400px"></el-input>
                        </el-form-item>
                        <el-button type="primary" style="width:200px">修改</el-button>
                    </el-form>
                </el-dialog>
                <el-dialog title="删除酒店信息" :visible.sync="deleteHotel" width="30%">
                    <p>确定要删除该酒店信息吗</p>
                    <span slot="footer" class="dialog-footer" style="text-align:center">
                        <el-button @click="deleteHotel = false">取 消</el-button>
                        <el-button type="primary" @click="deleteHotel = false">确 定</el-button>
                    </span>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userData: [],
      isReal: false,
      userInfo: false,
      hotelData: [],
      hotelInfo: false,
      loading: true,
      hotel: [],
      city: '',
      hotelName: '',
      addHotel: false,
      formHotel: {
        hName: '',
        city: '',
        hAddress: ''
      },
      modifyHotel: false,
      updateHotelInfo: {},
      deleteHotel: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      if (key !== 1) {
        this.userInfo = false
      }
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (row) {
      this.modifyHotel = true
      this.updateHotelInfo = row
      console.log(row)
    },
    deleteHotelInfo (row) {
      this.deleteHotel = true
    },
    showUser () {
      this.userInfo = true
    },
    getHotel () {
      this.hotelInfo = true
      let url = 'hotelInfo'
      var city = this.city
      var hotelName = this.hotelName
      var obj = {city: city, hotelName: hotelName}
      this.axios.get(url, {params: obj}).then(res => {
        if (res.data.code !== -1) {
          this.hotel = res.data
          console.log(this.hotel)
        } else {
          this.hotel = []
          this.$message({type: 'warning', message: '在该城市未找到该酒店'})
        }
      })
      setTimeout(() => {
        for (var i in this.hotel) {
          this.hotel[i].type = this.hotel[i].type.split(',')
          this.hotel[i].price = this.hotel[i].price.split(',')
        }
        this.hotelData = this.hotel
        console.log(this.hotelData)
        this.loading = false
      }, 1000)
    },
    addHotelInfo () {
      this.addHotel = true
    }
  },
  mounted () {
    var url = 'userInfo'
    this.axios.get(url).then(res => {
      this.userData = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.admin{
    .title{
        color: #91c3fc;
        font-size: 26px;
        margin-top: 10px;
    }
    .header{
        width: 100%;
        height: 50px;
        background-color: #ccc;
    }
}
</style>

<style>
.el-menu{
    border-right: 0px;
}
.el-submenu__title span{
    margin-left: -120px;
}
.el-col{
    height: 100vh;
}
.admin .el-table .cell,.el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    text-align: center;
}
.admin .el-col .el-table td, .el-table th{
    text-align: center;
}
.admin .el-dialog__footer{
    text-align: center;
}
</style>
