import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Foo from './components/Foo.vue'
import Index from './components/Index.vue'
import  "bootstrap/dist/css/bootstrap.css"

Vue.use(VueRouter)

const routes = [
     { path:"/",component:Index},
     { path:"/foo", component:Foo}
]

const router = new VueRouter({
  routes 
})

new Vue({
      router,
      render: h => h(Home), 
 }).$mount('#app')

