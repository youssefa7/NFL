import {Outlet} from "react-router-dom";
import './Layout.css';


const Layout = () => {
  return (
    <>
      <h1 className="Title">
        Money Maker
      </h1>
      <h3>
        The AI that predicts every NFL game
      </h3>

      <Outlet />
    </>
  )
};

export default Layout;
