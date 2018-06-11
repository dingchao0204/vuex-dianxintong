<template>
    <div>
        {{this.id}}
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id:''
            }
        },
        watch:{
            "$route"(n){
            this.id = n.params.id;
            }
        }

    }
</script>