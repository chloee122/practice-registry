import { Outlet } from "react-router-dom";
import SearchHeader from "../components/Header";

function Layout() {
  return (
    <div className="container mx-auto px-4">
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
