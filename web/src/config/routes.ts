import { IRoute } from '../helpers/types/Route';
import { LoginPage } from '../pages/auth/Login';
import { RegisterPage } from '../pages/auth/Register';
import { HomePage } from '../pages/Home';

export const routes : IRoute[] = [
    {
        name: 'Home page',
        path: '/',
        component: HomePage,
        exact: true,
        protected: false,
    },
    {
        name: 'Login page',
        path: '/auth/login',
        component: LoginPage,
        exact: true,
        protected: false,
    },
    {
        name: 'Register page',
        path: '/auth/register',
        component: RegisterPage,
        exact: true,
        protected: false,
    },
]