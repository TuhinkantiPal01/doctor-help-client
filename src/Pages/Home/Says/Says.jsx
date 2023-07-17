import { useEffect, useState } from "react";
import { BsQuote } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Navigation } from "swiper/modules";

const Says = () => {
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="py-10">
      <div className="w-[70%] mx-auto space-y-4">
        <h1 className="text-center text-2xl font-bold">What People Says</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores minus possimus ex. Animi placeat laboriosam
          rem tempora cumque sapiente velit, quae esse expedita vero!
        </p>
      </div>

      <div className="py-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {reviews.map(({ name, review, image, title, id }) => (
            <SwiperSlide key={id}>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <img src={image} alt="" />
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                      <h6 className="text-sm font-medium text-gray-500">{title}</h6>
                    </div>
                  </div>
                  <div>
                    <BsQuote color="orange" size={45}></BsQuote>
                  </div>
                </div>
                <div>
                  <p>{review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Says;
