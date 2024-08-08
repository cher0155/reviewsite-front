import {createWebHistory, createRouter} from 'vue-router';
import Reviews from '../views/Reviews.vue';
import Review from '../views/Review.vue';

const routes = [
    {
        path: '/',
        name: 'Reviews',
        component: Reviews
    },
    {
        path: '/review/:id',
        name: 'Review',
        component: Review

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;