<template>
    <button
        @click="handleClick" 
        :class="[
            'din-button',
            `din-button--${type}`,
            {'is-plain':plain},
            {'is-round':round},
            {'is-circle':circle},
            {'is-disabled':disable},
        ]"
        :disable = disable
    >
        <i v-if="icon" :class="[`din-${icon}`]"></i>
        <!-- 如果沒有傳入插槽 就隱藏,如果有傳插槽 就會有$slots.default默認值 --->
        <span v-if="$slots.default"><slot></slot></span>
    </button>
   
</template>

<script>
export default {
    name: "DinButton",
    props:{
        type:{
            type:String,
            default:'default'
        },
        plain:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        circle:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        },
        disable:{
            type:Boolean,
            default:false
        }
    },
    components: {},
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    },
    created(){
        console.log(this.type)
    },
};
</script>
<style lang="scss" scoped>

// default 基本樣式
.din-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被選到
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.din-button--primary {
    @include button-type(#fff,#05bbc9,#05bbc9,#048d97); 
}
.din-button--success {
    @include button-type(#fff,#43d396,#43d396,#2abb7e); 
}
.din-button--info {
    @include button-type(#fff,#876cfe,#876cfe,#715ccf);   
}
.din-button--warning {
    @include button-type(#fff,#e6a23c,#e6a23c,#cf9339);   
}
.din-button--danger {
    @include button-type(#fff,#f56c6c,#f56c6c,#c85353);    
}

// 樸素樣式
.din-button.is-plain {
    // @include button-is-plain(#05bbc9,#fff,#05bbc9);    
    &:hover,
    &:focus {
        background: rgb(240, 239, 239);
        border-color: #06afbb;
        color: #05bbc9;
    }
}
.din-button--primary.is-plain {
    @include button-is-plain(#1a9199,#e1eefa,#1a9199,#1a9199);    
}
.din-button--success.is-plain {
    @include button-is-plain(#22b175,#dbebd3,#22b175,#22b175);    
}
.din-button--warning.is-plain {
    @include button-is-plain(#e6a23c,#f1e1ca,#e6a23c,#e6a23c);      
}
.din-button--danger.is-plain {
    @include button-is-plain(#f56c6c,#f3c7c7,#f56c6c,#f56c6c);       
}
.din-button--info.is-plain {
    @include button-is-plain(#876cfe,#e0dcf3,#876cfe,#876cfe);    
}
// round屬性
.din-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
// circle屬性
.din-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
// icon配套樣式
.din-button [class*="one-icon-"] + span {
    margin-left: 5px;
}
// disabled屬性
.din-button.is-disabled {
    cursor: no-drop;
    background: rgb(224, 223, 223);
    color: #9fa1a3;
    border: rgb(224, 223, 223);
}
// din-button後只要包含 'din-icon-'並後面跟者span
.din-button [class*=din-icon-]+span{
    margin-left: 5px;
}

</style>
