import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import ProductPage from "./pages/Product/ProductPage";
import searchPageLoader from "./pages/Search/searchPageLoader";
import {productPageLoader} from "./pages/Product/productPageLoader";

function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/search",
          element: <SearchPage />,
          loader: searchPageLoader,
        },
        {
          path: "/product/:name",
          element: <ProductPage />,
          loader: productPageLoader,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
