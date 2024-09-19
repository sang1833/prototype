import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "Header",
          element: <MenuPage />
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
