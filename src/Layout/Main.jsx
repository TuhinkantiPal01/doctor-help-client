import { Outlet } from "react-router-dom";
import Navigation from "../SharedPage/Navigation/Navigation";
import Footer from "../SharedPage/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
