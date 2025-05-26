import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import AddRecipe from '../views/AddRecipe.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/resep/:id', name: 'RecipeDetail', component: RecipeDetail, props: true },
  { path: '/tambah', name: 'AddRecipe', component: AddRecipe }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
