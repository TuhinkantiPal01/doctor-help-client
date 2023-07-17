import { Breadcrumbs, Button } from "@material-tailwind/react";
import img from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const loginHandler = (event) => {
    event.preventDefault();

    if (state.email === "" || state.password === "") {
      setError("All Field Must Be Required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(state.email)) {
      setError("Invalid Email");
      return;
    }

    login(state.email, state.password)
      .then((res) => {
        console.log(res);
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

        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/user-not-found") {
          setError("User Not Found");
        }
        if (err.code === "auth/wrong-password") {
          setError("Invalid Password");
        }
      });
  };

  return (
    <div className="h-screen flex items-center gap-x-10">
      <div className="flex-1">
        <img className=" w-full" src={img} alt="img" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-y-5 justify-center">
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
          <a href="#" className="opacity-60">
            <span>Login</span>
          </a>
        </Breadcrumbs>
        <div className="border-2 border-[#F3F3F3] flex flex-col justify-center px-10 py-10">
          <span className="text-center font-semibold text-xl mb-8">
            Sign in To Doctor Help
          </span>
          <form className="space-y-3">
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
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  type={!show ? "password" : "text"}
                  className="bg-[#F3F3F3] text-gray-600 px-4 py-4 rounded-sm focus:outline-0 w-full "
                  placeholder="Enter your Password"
                  name="password"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                {!show ? (
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-4 cursor-pointer"
                  >
                    <BiShow size={25} />
                  </span>
                ) : (
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-4 cursor-pointer"
                  >
                    <BiHide size={25} />
                  </span>
                )}
              </div>
            </div>
            <p className="py-1 text-red-500 text-sm font-medium">{error}</p>
            <Button
              type="submit"
              variant="gradient"
              className="mt-5 rounded-none"
              fullWidth
              onClick={loginHandler}
            >
              Login
            </Button>
            <p className="font-semibold">
              New to Doctor Help ?{" "}
              <Link to="/registration" className="text-light-blue-500">
                Registration
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
      </div>
    </div>
  );
};

export default Login;
