import {
  Breadcrumbs,
  Button,
  Checkbox,
  Radio,
  Typography,
} from "@material-tailwind/react";
import img from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const initialState = {
    name: "",
    email: "",
    gender: "",
    password: "",
    term: false,
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TERM":
        return {
          ...state,
          term: !state.term,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRegistration = (event) => {
    event.preventDefault();

    if (
      state.name === "" ||
      state.email === "" ||
      state.gender === "" ||
      state.password === ""
    ) {
      setError("All Field Must Be Required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex1 = /^[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(state.email)) {
      setError("Invalid Email");
      return;
    }

    if (!passwordRegex1.test(state.password)) {
      setError("Password must be at least 8 characters");
      return;
    }

    createUser(state.email, state.password)
      .then((result) => {
        console.log(result);
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex items-center gap-x-10">
      <div className="flex-1">
        <img className=" w-full" src={img} alt="img" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-y-3 justify-center">
      <Breadcrumbs>
          <Link to="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link to="/login" className="opacity-60">
            <span>Login</span>
          </Link>
          <Link to="/registration">Registration</Link>
        </Breadcrumbs>
        <div className="border-2 border-[#F3F3F3] flex flex-col justify-center px-10 py-10">
          <span className="text-center font-semibold text-xl mb-8">
            Sign Up To Doctor Help
          </span>
          <form className="space-y-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                className="bg-[#F3F3F3] text-gray-600 px-4 py-4 rounded-sm focus:outline-0 w-full"
                placeholder="Enter your Name"
                name="name"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="font-semibold">
                Email address
              </label>
              <input
                type="email"
                className="bg-[#F3F3F3] text-gray-600 px-4 py-4 rounded-sm focus:outline-0 w-full"
                placeholder="Email Address"
                name="email"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>

            <div className="flex items-center gap-10">
              <label htmlFor="gender" className="font-semibold">
                Gender
              </label>
              <Radio
                id="html"
                name="gender"
                label="Male"
                value="Male"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <Radio
                id="react"
                name="gender"
                label="Female"
                value="Female"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                className="bg-[#F3F3F3] text-gray-600 px-4 py-4 rounded-sm focus:outline-0 w-full"
                placeholder="Enter your Password"
                name="password"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <Checkbox
                onClick={() => dispatch({ type: "TERM" })}
                label={
                  <Typography color="blue-gray" className="font-medium flex">
                    I agree with the
                    <Typography
                      as="a"
                      href="#"
                      color="blue"
                      className="font-medium hover:text-blue-700 transition-colors"
                    >
                      &nbsp;terms and conditions
                    </Typography>
                    .
                  </Typography>
                }
              />
            </div>
            <span className="py-1 text-red-500 text-sm font-medium">
              {error}
            </span>
            <Button
              onClick={handleRegistration}
              disabled={!state.term}
              type="submit"
              variant="gradient"
              className="mt-5 rounded-none"
              fullWidth
            >
              Registration
            </Button>
            <p className="font-semibold">
              Already Have An Account?{" "}
              <Link to="/login" className="text-light-blue-500">
                Login
              </Link>{" "}
              Please!
            </p>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Registration;
