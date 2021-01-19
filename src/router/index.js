import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
import New from '@/views/New'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/tasks', component: Tasks, name: 'tasks', alias: '/'},
    {path: '/new', component: New, name: 'new'},
    {path: '/task/:id?', component: Task, name: 'task'}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
