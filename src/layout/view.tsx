import { useLocation } from "react-router-dom";
import Navbar from "./navbar/view";
import SideBar from "./sideBar/view";

const Layout = (props: any) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/auth" ? (
        props.children
      ) : (
        <div className="flex">
          <SideBar />
          <div className="h-screen flex-1 ">
            <Navbar />
            <div className="p-[20px]"> {props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
