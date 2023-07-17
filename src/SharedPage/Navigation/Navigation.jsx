import { useState, useEffect, useContext } from "react";
import "./Navigation.css";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="blue-gray" className="p-1">
        <Link to="/" className="text-[14px] font-semibold">
          Home
        </Link>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <Link to="/appointment" className="text-[14px] font-semibold">
          Appointment
        </Link>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <Link to="/doctors" className="text-[14px] font-semibold">
          Doctors
        </Link>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <Link to="/contact" className="text-[14px] font-semibold">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  const logOutHandler = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Navbar className="mx-auto sticky  max-w-screen-xl py-2 px-4 lg:px-8 lg:py-3 bg-transparent border-none shadow-none rounded-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="h1"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-3xl icon"
          >
            Doctor Help
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          {user ? (
            <Menu>
              <MenuHandler>
                <Avatar
                  src="https://i.ibb.co/p4cD0Gs/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro.jpg"
                  alt="avatar"
                  withBorder={true}
                  className="p-0.5 cursor-pointer"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Favorite</MenuItem>
                <MenuItem>My Appointment</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={logOutHandler}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link to="/login">
              <Button
                variant="gradient"
                size="md"
                className="hidden lg:inline-block rounded-none"
              >
                <span>Login</span>
              </Button>
            </Link>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
