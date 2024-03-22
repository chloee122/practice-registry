import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import searchPageLoader from "./pages/Search/searchPageLoader";
import { detailPageLoader } from "./pages/Details/detailPageLoader";
import { homePageLoader } from "./pages/Home/homePageLoader";
import DetailPage from "./pages/Details/DetailPage";

function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage />, loader: homePageLoader },
        {
          path: "/search",
          element: <SearchPage />,
          loader: searchPageLoader,
        },
        {
          path: "/product/:name",
          element: <DetailPage />,
          loader: detailPageLoader,
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
