import LoginPage from "./pages/login";

const routes = [
  {
    title: "Login",
    path: "/",
    isProtected: false,
    element: <LoginPage />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    isProtected: true,
    element: <LoginPage />,
  },
];

export default routes;
