<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="用户手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="员工编号">
                <el-input v-model="form.num"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="归属组织">
                <el-popover
                    placement="bottom"
                    width="600"
                    trigger="click"
                    @after-enter="toFetchGroup">
                    <el-container
                        direction="vertical"
                        v-loading="flag"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)">
                        <el-form>
                            <el-row>
                                <el-col :span="12" v-model="filterItem">
                                    <el-input size="small" v-model="abc"></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <el-button size="small" @click="filterItem=abc">查询</el-button>
                                </el-col>
                            </el-row>
                            
                        </el-form>
                        <el-table :data="filterGroup()(filterItem)" height="300" @row-click="rowClick">
                            <el-table-column width="150" type="index" label="序号"></el-table-column>
                            <el-table-column width="150" property="ORGNAME" label="组织名称"></el-table-column>
                            <el-table-column width="300" property="FORGNAME" label="上级组织"></el-table-column>
                        </el-table>
                    </el-container>
                    
                    <el-input slot="reference" v-model="form.group">
                        <i slot="suffix" class="el-input__icon el-icon-arrow-down"></i>
                    </el-input>
                </el-popover>
               
            </el-form-item>
            <el-form-item>
                <el-button>查询</el-button>
            </el-form-item>
        </el-form>
        
    </div>
    
</template>

<script>
import { mapState,mapActions,mapGetters } from 'vuex'
   export default{
       data(){
           return{
               form:{
                   name:'',
                   phone:'',
                   email:'',
                   num:'',
                   number:'',
                   group:'未知组织'
               },
               flag:false,
               filterItem:'',
               abc:''
           }
       },
       methods:{
           ...mapActions(['fetchGroup_A']),
           ...mapGetters(['filterGroup']),
           rowClick(row,event,column){
                this.form.group = row.ORGNAME 
           },
           toFetchGroup(){
               this.flag = true;
               this.fetchGroup_A(()=>{
                   this.flag = false
               })
           }
       },
       mounted(){
           
       }
   }
</script>

<style>
.el-form-item{
    display:inline-block;
}

</style>