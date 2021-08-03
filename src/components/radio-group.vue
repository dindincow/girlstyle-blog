<template>
    <div class="din-radio-group">
       <slot></slot>
    </div>
</template>
<script>

export default {
    name:"DinRadioGroup",
    provide(){
        return{
            RadioGroup:this
        }
    },
    props:{
        value:null
    }
   
}
</script>
<style scoped lang="scss">

</style>