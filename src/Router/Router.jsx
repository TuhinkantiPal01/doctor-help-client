import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Doctors from "../Pages/Doctors/Doctors";
import Map from "../Pages/Map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"appointment",
        element : <Appointment></Appointment>
      },
      {
        path:"doctors",
        element:<Doctors></Doctors>
      },
      {
        path:"contact",
        element:<Map></Map>
      }
      
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "registration",
    element: <Registration></Registration>,
  },
]);

export default router;
