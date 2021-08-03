<template>
    
    <div class="din-switch" :class="{'is-checked':value}" @click="handleClick">
        <span class="din-switch__core" ref="core">
            <span class="din-switch__button"></span>
        </span>
         <input class="din-switch__input" type="checkbox" :name="name" ref="myinput">
    </div>
    
</template>
<script>

export default {
    name:"DinSwitch",
    props:{
        value:{
            type:Boolean,
            default:false   
        },
        activeColor:{
            type:String,
            default:''   
        },
        inactiveColor:{
            type:String,
            default:''   
        },
        name:{
            type:String,
            default:''   
        }
    },
    methods:{
        handleClick(){
            this.$emit('input',!this.value);
            // 數據更新完在渲染DOM
            this.$nextTick(()=>{
                this.setColor();
                this.$refs.myinput.checked = this.value;
            })
        },
        setColor(){
            if(this.activeColor || this.inactiveColor){
                // 判段啟用和不啟用的顏色
                let color = this.value ? this.activeColor :  this.inactiveColor;
                this.$refs.core.style.border = color;
                this.$refs.core.style.backgroundColor = color;
            }
   
        }
    },
    mounted(){
       this.setColor();
       this.$refs.myinput.checked = this.value;
    }
}
</script>
<style lang="scss" scoped>
.din-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .din-switch__core{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 52px;
        height: 26px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 17px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;
        .din-switch__button{
            position: absolute;
            top: 3px;
            left: 3px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 20px;
            height: 20px;
            background-color: #fff;
        }
    }
}
  
.is-checked {
    .din-switch__core{
        border-color: #409eff;
        background-color: #409eff;
        .din-switch__button {
            transform: translateX(24px);
        }
    }
}
 
.din-switch__input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>