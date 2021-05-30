import { IRoute } from '../helpers/types/Route';
import { HomePage } from '../pages/Home';

export const routes : IRoute[] = [
    {
        name: 'Home page',
        path: '/',
        component: HomePage,
        exact: true,
        protected: false,
    }
]