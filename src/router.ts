import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('./layouts/Main.vue'),
    redirect: '/to-do',
    children: [
      {
        path: '/to-do',
        component: () => import('./pages/Todo.vue'),
      },
      {
        path: '/in-progress',
        component: () => import('./pages/InProgress.vue'),
      },
      {
        path: '/completed',
        component: () => import('./pages/Completed.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
