import { RouteProps } from "react-router-dom"

import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"

const routes: RouteProps[] = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about", component: AboutPage },
  { path: "/todo", component: TodoPage },
]
export default routes
