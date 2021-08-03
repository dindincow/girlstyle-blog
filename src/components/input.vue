<template>
    <div class="din-input">
        <input 
            class="din-input__inner"
            :class="{'is-disable':disabled}"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible?'text':'password'):type"
            :name="name"
            :disabled = disabled
            :value="value"
            @input="handleInput"
        >
        {{showPassword}}
        <span class="din-input__suffix">
            <i class="din-input__icon din-icon-close" v-if="clearable && value" @click="clear"></i>
            <i class="din-input__icon din-icon-eyes" 
                v-if="showPassword" 
                @click="handlePassword"
                :class="{'icon-eyes-active':passwordVisible}"
            ></i>
        </span>
    </div>
</template>
<script>

export default {
    name:"DinInput",
    props:{
        placeholder:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'text'
        },
        name:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            type:String,
            default:''
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            // 判斷是否顯示密碼框
            passwordVisible:false
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input',e.target.value)
        },
        clear(){
            this.$emit('input','')
        },
        handlePassword(){
            console.log("1231321")
            this.passwordVisible =  !this.passwordVisible;
        }
    }
    
}
</script>
<style lang="scss">
.din-input{
    width:100%;
    position: relative;
    font-size: 15px;
    display: inline-block;
    .din-input__inner{
        height: 40px;
        -webkit-appearance: none;
        background-color: #354a5c;
        background-image: none;
        border: 1px solid #547087;
        border-radius: 4px;
        box-sizing: border-box;
        color: #f0ecec;
        display: inline-block;
        font-size: inherit;
        outline: none;
        padding: 0 15px;
        //transition: border-color .2s cubic-bezier(.645,045,.355,1);
        width: 100%; 
        &::placeholder {
            color: rgb(160, 160, 160);
        }
        &:focus {
            border:1px solid #409eff;
        }
        &.is-disable {
            background: #d1d1d1;
            cursor:not-allowed;
        }
    }
    .din-input__suffix{
        position: absolute;
        right: 10px;
        top: 14px;
        .din-input__icon{
            color: #d1d1d1;
            cursor: pointer;
            &.icon-eyes-active{
                color: aqua;
            }
            &:hover{
                color: aqua;
            }
        }
    }
}

</style>
