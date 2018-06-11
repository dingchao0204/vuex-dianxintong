<template>
    <div class="erwei">
        <p class="top"><span>手机扫码</span><span>安全防盗</span></p>
        <img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_efde696.png"/>
        <p class="bottom">使用APP扫描二维码登陆</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style>
    .erwei{
        display:flex;
        flex-direction:column;
        
    }

    .erwei .top{
        width:100%;
        height:30%;
        display:flex;
        justify-content:space-around;
        font-size:20px;
    }
    .erwei img{
        width:150px;
        height:150px;
        margin-top:10%;
        margin:0 auto;
        padding:5% 0;
    }
    

    .erwei .bottom {
        width:60%;
        height:26%;
        border-radius:6%;
        background:skyblue;
        padding:2% 2%;
        font-size:20px;
        margin:0 auto;
    }
</style>