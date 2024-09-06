import { createRouter, createWebHistory } from "vue-router";
import mains from "../mains.vue";
import addPost from "./pages/addPost.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/EvacuatorRU', component: mains},
        {path: '/addPost', component: addPost}
    ]
})