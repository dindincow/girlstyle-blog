<template>
    <div class="dialog_mask">
        <div class="dialog">
            <div class="dialog_header">
                <div class="left">
                    <i class="din-icon-Vector dialogicon"></i>
                    <span>{{title}}</span>
                </div>
                <button>
                    <i class="din-icon-close"></i>
                </button>
            </div>
            <div class="dialog_body">
                東京奧運開幕在即，21日有四名參賽者因為確診染新冠，奧運夢碎?
            </div>
            <div class="dialog_footer">
                <din-button round>取 消</din-button>
                <din-button round type="primary">確 認</din-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DinDialog",
    props:{
        title:{
            type:String,
            default:"提示"
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
        margin: 150px auto;
        position: relative;
        transform: translateY(50%);
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
</style>
