<template>
    <el-container> 
        <el-header>中国电信通企业信息平台</el-header>
        <el-container>
            <el-aside width="200px"><Menu/></el-aside>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>
<script>
  import Menu from './Menu'
    export default{
        name:'Home',
        components:{
          Menu
        }
        
    }
</script>
<style>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>