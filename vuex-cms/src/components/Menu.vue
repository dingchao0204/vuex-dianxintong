<template>
  <div class="menu">
    <el-menu
      default-opends="['1']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="(item,index) in $store.state.menu " :index="index+'1'" :key="index">
        <template slot="title"><i class="el-icon-location"></i>{{item.title}}</template>
        <el-menu-item v-for="(i,ind) in item.pickitem " :index="index+'1'+'-'+ind+'1'" :key="ind">
          <router-link :to="{name:i.type}">{{i.title}}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
    
</template>

<script>
import { mapState,mapActions } from 'vuex'
  export default {
    data(){
      return {
         
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      ...mapActions(['fetchMenu_A'])
    },
    computed:{
      ...mapState(['menu'])
    },
    mounted(){
      //dispatch操作流程
      this.fetchMenu_A() 
    }
  }
</script>
<style>

</style>