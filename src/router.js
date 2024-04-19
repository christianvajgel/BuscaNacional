import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/page/Home.vue";
import AdicionarArquivo from "@/components/page/AdicionarArquivo.vue";
import ListarArquivo from "@/components/page/ListarArquivo.vue";
import Contato from "@/components/Contato.vue";
import FAQ from "@/components/FAQ.vue";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/adicionar',
        component: AdicionarArquivo,
    },
    {
        path: '/listar',
        component: ListarArquivo,
    },
    {
        path: '/contato',
        component: Contato,
    },
    {
        path: '/faq',
        component: FAQ,
    },

    // ADD NEW ROUTES HERE

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;