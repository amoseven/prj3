import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
import New from '@/views/New'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/tasks', component: Tasks, name: 'tasks', alias: '/'},
    {path: '/new', component: New, name: 'new'},
    {path: '/task/:id?', component: Task, name: 'task'}
  ]
})

export default router
