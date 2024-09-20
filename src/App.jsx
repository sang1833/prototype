import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MenuPage from "./pages/MenuPage";
import SolidMenuPage from "./pages/SolidMenuPage";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "Gradient",
          element: <MenuPage />
        },
        {
          path: "Solid",
          element: <SolidMenuPage />
        },
        {
          path: "*",
          element: <NotFoundPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
