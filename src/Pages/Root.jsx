import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
