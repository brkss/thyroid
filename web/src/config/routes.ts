import { IRoute } from "../helpers/types/Route";
import { LoginPage } from "../pages/auth/Login";
import { RegisterPage } from "../pages/auth/Register";
import { HomePage } from "../pages/Home";
import { ProfilePage } from "../pages/Profile";
import { DietPage } from "../pages";

export const routes: IRoute[] = [
  {
    name: "Login page",
    path: "/auth/login",
    component: LoginPage,
    exact: true,
    protected: false,
  },
  {
    name: "Register page",
    path: "/auth/register",
    component: RegisterPage,
    exact: true,
    protected: false,
  },
  {
    name: "Home page",
    path: "/",
    component: HomePage,
    exact: true,
    protected: true,
  },
  // Diet
  {
    name: "Diet",
    path: "/diet",
    component: DietPage,
    exact: true,
    protected: true,
  },
  {
    name: "Profile Page",
    path: "/profile",
    component: ProfilePage,
    exact: true,
    protected: true,
  },
];
