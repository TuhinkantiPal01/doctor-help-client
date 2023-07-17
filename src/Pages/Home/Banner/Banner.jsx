import { Button } from "@material-tailwind/react";
import "./Banner.css";
import doctors from "../../../assets/doctors.png";

const Banner = () => {
  return (
    <div className="banner-container h-[540px] relative top-0 flex">
      <div className="max-w-5xl mx-auto flex items-center gap-8">
        <div className="w-[60%]">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">Best Medical Help Center</h1>
            <p className="text-sm font-semibold text-gray-500-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dicta aut harum dignissimos. Neque voluptatem, aperiam
              corporis commodi saepe ipsa?
            </p>
            <Button color="green" className="rounded-none">
              All Services
            </Button>
          </div>
        </div>
        <div>
          <div>
            <img className="w-96" src={doctors} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
