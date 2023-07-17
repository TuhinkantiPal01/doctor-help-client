import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div className="py-10">
      <div className="flex gap-5 justify-around">
        <div className="bg-[#07332F] flex gap-4 items-start text-white px-8  py-10 flex-1">
          <AiOutlineClockCircle size={25} />
          <div>
            <h2 className="text-xl font-semibold mb-3">Opening Hours</h2>
            <p>Open 9 Am to 10 pm Everyday</p>
          </div>
        </div>
        <div className="bg-[#F7A582] flex gap-4 items-start text-white px-8 py-10 flex-1">
          <CiLocationOn size={30} />
          <div>
            <h2 className="text-xl font-semibold mb-3">Our Location</h2>
            <p>Steel Meal , Patenga , Chattogram</p>
          </div>
        </div>
        <div className="bg-[#07332F] flex gap-4 items-start text-white px-8 py-10 flex-1">
          <BiPhoneCall size={25} />
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>01834-245438</p>
            <p>01732-255570</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
