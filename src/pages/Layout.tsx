import { Outlet } from "react-router-dom";
import SearchHeader from "../components/Header";

function Layout() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default Layout;
