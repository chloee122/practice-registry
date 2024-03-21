import { Outlet } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";

function Layout() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default Layout;
