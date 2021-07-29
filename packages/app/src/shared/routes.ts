import { Home } from '@pages';

export interface Route {
    path: string;
    key: string;
    component: any;
}

export const ROUTES: Route[] = [
    {
        path: '/',
        key: 'home',
        component: Home,
    },
];
