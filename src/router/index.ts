import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chat/:roomId",
      name: "chat",
      component: () => import("../views/ChatRoom.vue"),
      props: true, // Enable route params as props
    },
    {
      path: "/:pathMatch(.*)*", // Catch-all route for unknown paths
      redirect: "/", // Redirect any unknown paths to home
    },
  ],
});

export default router;
