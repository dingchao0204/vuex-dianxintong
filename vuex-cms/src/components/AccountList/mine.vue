<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8" >
                <div class="grid-content bg-purple" >
                    <router-link to="/Home/changeName">发起更名流程工单</router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/Home/transfer">发起过户流程工单</router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                <router-link to="/Home/transfer">工程维护单</router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/Home/transfer">其他类型工单</router-link>  
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import changeName from './changeName'
    export default{
        data(){
            return{

            }
        },
        components:{
            changeName
        },
        methods:{

        }
    }
</script>

<style>
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    margin-bottom:10px;
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>