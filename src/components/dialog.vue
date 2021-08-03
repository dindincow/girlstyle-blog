<template>
    <!---  @click.self 點自己才觸發事件，點子元素不觸發事件--->   
    <transition name="fad">    
        <div class="dialog_mask" v-show="visible" @click.self="handleClose">
            <div class="dialog" :style="{width:width,top:top}">
                <div class="dialog_header">
                    <div class="left">
                        <i class="din-icon-Vector dialogicon"></i>
                        <slot name="title">
                            <span>{{title}}</span>
                        </slot>
                    </div>
                    <button @click="handleClose">
                        <i class="din-icon-close"></i>
                    </button>
                </div>
                <div class="dialog_body">
                    <!-- 默認插槽--->
                    <slot></slot> 
                </div>
                <div class="dialog_footer" v-if="$slots.footer">
                    <slot name="footer">
                        <din-button round>取 消</din-button>
                        <din-button round type="primary">確 認</din-button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:"DinDialog",
    props:{
        title:{
            type:String,
            default:"提示"
        },
        width:{
            type:String,
            default:'50%'
        },
        top:{
            type:String,
            default:'15vh'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleClose(){
            console.log("QQQ");
            // 更新父祖件 visible 屬性值
            this.$emit('update:visible',false)
        }
    }
    
}
</script>
<style lang="scss" scoped>
.dialog_mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:99;
    background: rgba(0,0,0,0.5);
    overflow: auto;
    .dialog{
        margin: auto;
        position: relative;
        max-width: 450px;
        width: 80%;
        background: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 5px 5px rgb(29 44 57);
        padding: 20px 30px;
        .dialog_header{
            
            display: flex;
            justify-content: space-between;
            color: #223341;
            .left{
                font-size: 21px;
                flex: 1;
                font-family: sans-serif;
                .dialogicon{
                    font-size: 26px;
                    margin-right: 10px;
                    vertical-align: bottom;
                }
            }
            button{
                background: #FFF;
                border: 2px solid #504c4c;
                font-size: 18px;
                font-weight: 700;
                cursor: pointer;
                &:hover{
                     background: rgb(216, 215, 215);
                }
            }

        }
        .dialog_body{
            padding: 20px 0;
            line-height: 28px;
        }
        .dialog_footer{
            border-top: 1px solid #e6e6e6;
            padding-top: 18px;
            display: flex;
            justify-content: space-around;
        }

    }
}


.fad-enter-active {
    animation: fad .3s;
}
.fad-leave-active {
    animation: fad .3s reverse;
}
@keyframes fad {
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
}

</style>
