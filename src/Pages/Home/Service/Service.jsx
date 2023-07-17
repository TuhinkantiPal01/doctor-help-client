import { useEffect, useState } from "react";
import service from "../../../assets/service.jpg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const [activeTab, setActiveTab] = useState("CavityProtection");

  return (
    <div className="py-10">
      <div className="flex gap-8">
        <div className="w-[50%] flex-1">
          <img src={service} alt="service" />
        </div>
        <div className="flex-1">
          <div className="px-4 py-5 space-y-6">
            <h1 className="text-2xl font-bold">Our Services</h1>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem possimus nesciunt dignissimos quia adipisci!
              Voluptas ratione dicta dolores repudiandae quis itaque perferendis
              deleniti, fuga quod quas? Odio commodi blanditiis expedita?
            </p>

            {/* Tab section */}
            <div>
              <Tabs value={activeTab} id="custom-animation">
                <TabsHeader
                  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                  }}
                >
                  {services.slice(0,3).map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? "text-blue-500" : ""}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {services.map(({ value, desc, title, img }) => (
                    <TabPanel key={value} value={value}>
                      <div className="space-y-3">
                        <div>
                          <img
                            className="rounded-sm w-[440px] h-[294px]"
                            src={img}
                            alt=""
                          />
                        </div>
                        <h2 className="text-2xl font-semibold text-black">
                          {title}
                        </h2>
                        <p>{desc}</p>

                        <div>
                          <Button
                            variant="gradient"
                            size="md"
                            className="hidden lg:inline-block rounded-none"
                          >
                            <span>See More Details</span>
                          </Button>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
