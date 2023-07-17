import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  //   const data = [
  //     {
  //       label: "HTML",
  //       value: "html",
  //       desc: `It really matters and then like it really doesn't matter.
  //           What matters is the people who are sparked by it. And the people
  //           who are like offended by it, it doesn't matter.`,
  //     },
  //     {
  //       label: "React",
  //       value: "react",
  //       desc: `Because it's about motivating the doers. Because I'm here
  //           to follow my dreams and inspire other people to follow their dreams, too.`,
  //     },
  //     {
  //       label: "Vue",
  //       value: "vue",
  //       desc: `We're not always in the position that we want to be at.
  //           We're constantly growing. We're constantly making mistakes. We're
  //           constantly trying to express ourselves and actualize our dreams.`,
  //     },
  //     {
  //       label: "Angular",
  //       value: "angular",
  //       desc: `Because it's about motivating the doers. Because I'm here
  //           to follow my dreams and inspire other people to follow their dreams, too.`,
  //     },
  //     {
  //       label: "Svelte",
  //       value: "svelte",
  //       desc: `We're not always in the position that we want to be at.
  //           We're constantly growing. We're constantly making mistakes. We're
  //           constantly trying to express ourselves and actualize our dreams.`,
  //     },
  //   ];

  return (
    <div>
      <Tabs value="html" className="max-w-[60rem]">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          {services.map(({ label, value }) => (
            <Tab
              className=" shadow-md shadow-blue-gray-100 h-20 ml-3"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="mt-5 mb-16">
          {services.map(({ value, label, slots }) => (
            <TabPanel key={value} value={value}>
              <h1 className="text-center text-3xl font-semibold mb-8">
                Available Slot For {label}
              </h1>
              <div className="grid grid-cols-3 gap-x-8 gap-y-16 place-items-center">
                {slots.map((slot) => (
                  <div
                    key={label}
                    className=" shadow-lg p-12 flex flex-col items-center gap-y-5 text-center"
                  >
                    <img
                      className="h-12 w-12 rounded-[50%]"
                      src={slot.image}
                      alt=""
                    />
                    <div>
                      <h3 className="text-md font-bold text-black">
                        {slot.name}
                      </h3>
                      <p>9:00 Am - 11:00 Am</p>
                    </div>
                    <Button
                      type="submit"
                      variant="gradient"
                      className="mt-5 rounded-none"
                      fullWidth
                    >
                      Book Appointment
                    </Button>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Services;
