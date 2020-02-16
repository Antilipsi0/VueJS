import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './../view/HomePage.vue'
import GamePage from './../view/GamePage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage},
        { path: '/game', component: GamePage}
    ]
})