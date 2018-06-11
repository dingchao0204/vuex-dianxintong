<template>
    <div class="log">
      <el-form :model="login_model" :label-position="labelPosition" ref="form">
        <el-form-item prop="account" :rules="rules" class="lable" label="登陆账号">
          <el-input v-model="login_model.account" placeholder="请输入手机号或邮箱账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="isPhoneDisabled" type="primary" size="small" @click="checkValidate('phone')">{{phoneMsg}}</el-button>
          <el-button :disabled="isEmailDisabled" type="primary" size="small" @click="checkValidate('email')">{{emailMsg}}</el-button>
        </el-form-item>
        <el-form-item class="lable"  label="动态密码">
          <el-input placeholder="请输入动态密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn" size="medium" @click="goLogin">登录</el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'top',
      login_model:{
        account:''
      },
      rules:[
        { required: true, message: '请输入账号信息'}
      ],
      phoneMsg:'手机获取动态密码',
      emailMsg:'邮箱获取动态密码',
      timer:null,
      isPhoneDisabled:false,
      isEmailDisabled:false
    }
  },
  methods:{
    countDown(type){
      let start = 10;
          this.timer = setInterval(()=>{
            start--;
            type=='phone'?
            (this.isPhoneDisabled = true,this.phoneMsg = start)
            :(this.isEmailDisabled = true,this.emailMsg = start)
            
            
            this.phoneMsg = start;
            this.emailMsg = start;
            if(start<0){
              type=='phone'?this.phoneMsg = '重新获取动态密码':this.emailMsg = '重新获取动态密码';
              clearInterval(this.timer);
              type=='phone'?this.isPhoneDisabled = false:this.isEmailDisabled = false
            }
          },1000)
    },
    checkValidate(type){
      if(this.rules.length > 1){
        this.rules.pop()
      }
      if(type=="phone"){
        this.rules.push({validator:(rule,value,callback)=>{
          if(/^1[3578]\d{9}$/.test(value)){
            callback()
          }else{
            callback(new Error('请输入正确格式的手机号码'))
          }
        }, message: '请输入正确的手机号码'})
      }else if(type == "email"){
        this.rules.push({ type, message: '请输入正确的邮箱地址'})
      }
      
      this.$refs.form.validate((isValid,rules)=>{
        if(isValid){
          this.countDown(type);
          // this.$http.post('',{account:login_model.account}).then(res=>{
          //   console.log(res)
          // })
          
        }
      })
      
    },
    goLogin(){
      sessionStorage.setItem('islogin',1)
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>
  .log .lable{
    width:60%;
    text-align:left;
    margin-left:20%;
  }
  .log .lable .el-input{
    width:100%;
  }
</style>
