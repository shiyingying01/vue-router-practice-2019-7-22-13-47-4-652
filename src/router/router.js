import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'
import TodoList from '../components/TodoList.vue'
import Home from '../components/Home.vue'
import myHome from '../components/myHome.vue'


Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/todolist',
            name: 'todolist',
            component: TodoList
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/myhome',
            name: 'myhome',
            component: myHome
        },
    ]
})


export default router;

