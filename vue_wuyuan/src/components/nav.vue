<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2" @click="showS">目的地</el-menu-item>
            <el-menu-item index="3" @click="ticket">门票</el-menu-item>
            <el-menu-item index="4">酒店预订</el-menu-item>
            <el-menu-item index="5">美食</el-menu-item>
            <el-menu-item index="6">线路推荐</el-menu-item>
            <el-menu-item index="7">游记</el-menu-item>
            <el-menu-item index="8">我的主页</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      keyS: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.keyS = key
    },
    showS () {
      if (this.keyS) {
        this.$emit('click', 2)
      }
    },
    ticket () {
      // 获取当前路由的名字
      console.log(this.$route.name)
      if (this.$route.name === 'userIndex') {
        this.$message({type: 'warning', message: '请先输入目的地'})
      }
    }
  }
}
</script>

<style scoped>
.el-menu{
    width: 866px;
    margin-left: 155px;
}
.el-menu--horizontal>.el-menu-item{
    margin-right: 30px;
}
.el-menu--horizontal>.el-menu-item:first-child{
    color: #fff;
    font-weight: 600;
    background-color: #93d4e0;
}
.el-menu--horizontal>.el-menu-item:first-child:hover{
    color: #fff;
}
.el-menu--horizontal>.el-menu-item:last-child{
    margin-right: 0;
}
.el-menu--horizontal>.el-menu-item:not(:first-child):hover{
    border-bottom:2px solid #93d4e0 !important;
    color: #93d4e0;
}
.el-menu--horizontal>.el-menu-item:first-child.is-active{
    color: #fff;
}
.el-menu--horizontal>.el-menu-item.is-active{
    color: #93d4e0;
    border-bottom:2px solid #93d4e0;
}
</style>
