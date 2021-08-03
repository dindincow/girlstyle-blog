<template>
    <div class="din-radio" :class="{'is-checked': lable===model}">
       <span class="din-radio__input">
            <span class="din-radio__inner"></span>
            <input
                class="din-radio__original"
                type="radio"
                :value="lable"
                :name="name"
                v-model="model"
            >
       </span>
       <span class="din-radio__lable">
           <slot></slot> 
           <!-- 如果沒傳內容 ，就把lable 當內容--->
           <template v-if="!$slots.default">
               {{lable}}
           </template>
       </span>
    </div>
</template>
<script>

export default {
    name:"DinRadio",
    props:{
        lable:{
            type:[String,Number,Boolean],
            default:''
        },
        value:null,
        name:{
            type:String,
            default:''
        }
    },
    inject:{
        RadioGroup:{
            default:''
        }
    },
    created(){
        console.log("******",this.$parent)
    },
    computed:{
        model:{
            get(){
                // 是否有被 radio-group包裹，如果有被包裹，則使用 radio-group 的 value，不然使用radio自己的value
                return this.isGroup ? this.RadioGroup.value : this.value
                 
            },
            set(value){
                // console.log("value======",value)
                // this.$emit('input',value)
                return this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
            }
        },
        isGroup(){
            // 判斷 radio 是否有被 radio-group包裹
            // !!this.RadioGroup 改為布林值
            console.log('this.RadioGroup=>',!!this.RadioGroup)
            return !!this.RadioGroup;
        }
    }
}
</script>
<style scoped lang="scss">
.din-radio {
    color: #e5ecf2;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .din-radio__input {
        white-space: nowrap;
        margin-right: 6px;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .din-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            //   background-color: #409eff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
        }
        .din-radio__inner.is-mimicry {
        box-shadow: inset 4px 2px 6px #cacaca48,
            inset -4px -2px 6px rgba(255, 255, 255, 0.377);
        }
        // 內部小白點
        .din-radio__inner:after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #fff;
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.15s ease-in;
        }
        .din-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .din-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
}

// 選中樣式
.din-radio.is-checked {
    color: #409eff;
    .din-radio__input {
        .din-radio__inner {
            border-color: #409eff;
            background-color: #409eff;
            &::after {
                transform: translate(-50%, -50%) scale(1.5);
            }
        }
    }
    .din-radio__label {
        color: #409eff;
    }
}
</style>