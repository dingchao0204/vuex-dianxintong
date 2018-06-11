<template>
  <el-container>
    <el-aside width="200px">
      <header>菜单管理</header>
      <el-tree :data="tree" @node-click="handleNodeClick"></el-tree>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState(['tree'])
  },
  mounted(){
    this.fetchTree_A()
  },
  methods:{
    handleNodeClick(data){
      if(!data.children){
        this.$router.push({
          name:'childTree',
          params:{
            id:data.id
          }
        })
      }
    },
    ...mapActions(['fetchTree_A'])
  }
}
</script>

<style scoped>
  header{
    line-height: 40px;
    padding-left: 10px;
    color:#666;
  }
</style>
