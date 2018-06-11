<template>
  <div class="login">
    <header>
      <h1>电信通</h1>
      <h3>企业信息管理平台</h3>
    </header>
    <section>
        <div class="tit">
          <span @click="check('erwei')" :class="code==='erwei'?'active':''">二维码登录</span>
          <span @click="check('log')" :class="code==='log'?'active':''">账号登录</span>
        </div>
        <div class="component">
          <Transition name="login_box">
            <Component :is="code"></Component>
          </Transition>
        </div>
    </section>
    <footer>
      <ul>
        <li>集团邮电系统</li>
        <li>集团邮电系统</li>
        <li>集团邮电系统</li>
        <li>集团邮电系统</li>
        <li>集团邮电系统</li>
      </ul>
      <p>北京电信通电信工程有限公司 版权所有 2011-2111 技术支持：IT共享中心</p>
    </footer>
  </div>
</template>

<script>
import erwei from './erwei'
import log from './log'

export default {
  name: 'Login',
  data () {
    return {
      code:'erwei',
      active_class:''
    }
  },
  beforeRouteEnter(to,from,next){
    next()
  },
  components:{
    erwei,
    log
  },
  methods:{
    check(str){
      this.code=str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    
    width:100%;
    height:100%;
    position:relative;
    background-image:url('../../assets/319422.jpg');
    background-repeat:no-repeat;
    background-size:cover;
  }
  .login header{
    height:5%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:#fff;
  }
  
  .login section{
    background:#fff;
    width:30%;
    height:50%;
    position:absolute;
    right:10%;
    bottom:20%;
    display:flex;
    flex-direction:column;
    border-radius:5%;
    overflow:hidden;
  }

  section .tit{
    display:flex;
    height:15%;
  }
  
  section .tit span{
    background:#ccc;
    text-align:center;
    line-height:60px;
    width:50%;
    height:100%;
     
  }
  section .tit .active{
    background:#fff;
  }
 
  section .component{
    flex:1;
    position:relative;
  }
  section .component div{
    position:absolute;
    top:0;
    width:100%;
  }
  section .component .login_box-enter{
    transform:translate3d(-100%,0,0);
  }
  section .component .login_box-enter-to{
    transform:translate3d(0,0,0);
  }

  section .component .login_box-enter-active,.login_box-leave-active{
    transition:transform  linear .3s;
  }
  section .component .login_box-leave{
    transform:translate3d(0,0,0);
  }
  section .component .login_box-leave-to{
    transform:translate3d(100%,0,0);
  }
  .login footer{
    width:100%;
    height:10%;
    background:#fff;
    position:absolute;
    bottom:0;
    left:0;
    
  }
  .login footer ul{
    width:60%;
    display:flex;
    
    position:absolute;
    left:20%;
    top:2%;
    list-style:none;
  }
  .login footer ul li{
    flex:1;
    border-left:8px solid black;
    padding:0 30px;
  }
  .login footer p{
    width:40%;
    position:absolute;
    left:30%;
    bottom:2%;
  }
</style>
