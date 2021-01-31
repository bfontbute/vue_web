import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
//importamos BOostrap + iconos
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueGtag, {
    config: { id: " 188480311 " }
});


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


/*
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>',
        render: h => h(App)
    })
    */