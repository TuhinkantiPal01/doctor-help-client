import { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import "./Appointment.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import img1 from "../../../assets/appointment1.jpg";
import Services from "./Services/Services";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section>
      <div className="appointment h-72 flex justify-center pt-6">
        <Breadcrumbs>
          <Link to="/" className="bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link to="/appointment">Appointment</Link>
        </Breadcrumbs>
      </div>
      <div className="flex justify-center items-center gap-x-14 my-24">
        <div>
          <Calendar
            className="shadow-lg border-0 p-5 rounded-md"
            onChange={onChange}
            value={value}
          />
        </div>
        <div>
          <img className="w-96 h-72" src={img1} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-center text-3xl font-bold">Please Select a Service</h2>
        <div className="flex justify-center mt-16">
          <Services></Services>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
