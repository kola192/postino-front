import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/all-posts'
    },
    {
        path: '/all-posts',
        name: 'posts',
        component: () => import('../views/AllPosts.vue')
    },
    {
        path: '/add-post',
        name: 'addPost',
        component: () => import('../views/AddPost.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
