import Banner from "../Banner/Banner";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import Says from "../Says/Says";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-5xl mx-auto">
        <Service></Service>
        <Testimonial></Testimonial>
        <Says></Says>
        <ExpertDoctor></ExpertDoctor>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
