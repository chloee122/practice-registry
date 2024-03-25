import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import searchLoader from "./pages/search/searchLoader";
import { detailLoader } from "./pages/detail/detailLoader";
import { homePageLoader } from "./pages/home/homeLoader";
import DetailPage from "./pages/detail/DetailPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/product/:name",
        element: <DetailPage />,
        loader: detailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
