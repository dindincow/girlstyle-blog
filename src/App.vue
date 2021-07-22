<template>
    <div id="app">
        <h3>Botton UI</h3>
        <div class="row row1">
            <din-button @click="fun">default</din-button>
            <din-button type="primary">primary</din-button>
            <din-button type="success">Success</din-button>
            <din-button type="warning">Warning</din-button>
            <din-button type="danger">Danger</din-button>
            <din-button type="info">Info</din-button>
        </div>

        <div class="row row2">
            <din-button plain>default</din-button>
            <din-button plain type="primary">primary</din-button>
            <din-button plain type="success">Success</din-button>
            <din-button plain type="warning">Warning</din-button>
            <din-button plain type="danger">Danger</din-button>
            <din-button plain type="info">Info</din-button>
        </div>
        <div class="row row3">
            <din-button round >default</din-button>
            <din-button round plain type="primary">primary</din-button>
            <din-button round plain type="success">Success</din-button>
            <din-button round plain type="warning">Warning</din-button>
            <din-button round plain type="danger">Danger</din-button>
            <din-button round plain type="info">Info</din-button>
        </div>
        <div class="row row3">
            <din-button circle icon="icon-search"></din-button>
            <din-button circle type="primary" icon="icon-search"></din-button>
            <din-button circle type="success" icon="icon-Serviceusers"></din-button>
            <din-button circle type="warning" icon="icon-food"></din-button>
            <din-button circle type="danger" icon="icon-food1"></din-button>
            <din-button circle type="info" icon="icon-streamlist"></din-button>
        </div>
        <div class="row row3">
            <din-button circle>叮</din-button>
            <din-button circle type="primary" icon="icon-search"></din-button>
            <din-button round type="success" icon="icon-Serviceusers">叮</din-button>
            <din-button round type="warning" icon="icon-food">叮</din-button>
            <din-button round type="danger" icon="icon-food1">叮</din-button>
            <din-button plain type="info" icon="icon-streamlist" @click="fun">click Me</din-button>
        </div>
        
    </div>
</template>
<script>

export default {
    components:{
       
    },
    methods:{
        fun(){
            console.log("CLICK!!")
        }
    }
    
}
</script>

<style lang="scss">
#app{
    width: 1200px;
    margin: 100px auto;
    
    .din-button{
        margin:15px;
    }
}
.row{
   
}
h3{
    color: #f2f2f2;
    font-size: 36PX;
    font-family: monospace;
}
</style>
