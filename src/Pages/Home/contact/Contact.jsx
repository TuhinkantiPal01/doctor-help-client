import { Button } from "@material-tailwind/react";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="h-[528px] flex flex-col justify-center bg-[#07332F] px-24 py-28 text-white mt-10 mb-20">
      <div className="flex items-center gap-x-5">
        <div className="space-y-5 w-[40%]">
          <h1 className="text-3xl">Contact With Us</h1>
          <p className="text-sm leading-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className="flex items-center gap-x-5">
            <BiPhoneCall size={30} />
            <span className="text-lg">+88 1834245438</span>
          </div>
          <div className="flex items-center gap-x-5">
            <BiLocationPlus size={30}/>
            <span>Patenga , Chattgoram , Bangladesh</span>
          </div>
        </div>
        <div>
          <div>
            <form>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                <input
                  type="text"
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Mobile Number"
                />
                <input
                  type="text"
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Doctor Name"
                />
                <input
                  type="date"
                  name=""
                  id=""
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Name"
                />
                <input
                  type="time"
                  name=""
                  id=""
                  className="bg-white text-white bg-opacity-5 px-4 py-4 rounded-md focus:outline-0"
                  placeholder="Name"
                />
              </div>
              <Button type="submit" variant="gradient" className="mt-5 rounded-none" fullWidth>Book Now</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
