import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/main.scss";
import "./assets/fonts/iconfont.css";
import DinButton from './components/button'
import DinDialog from './components/dialog'
Vue.config.productionTip = false;
Vue.component(DinButton.name,DinButton);
Vue.component(DinDialog.name,DinDialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
