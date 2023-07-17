import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

const ExpertDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  const sortArray = doctors?.sort((a, b) => b.rating - a.rating);
  console.log(sortArray);

  const topDoctors = sortArray.slice(0, 3);
  console.log(topDoctors);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <div className="w-[70%] mx-auto space-y-4">
        <h1 className="text-center text-2xl font-bold">Our Expert Doctor</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores minus possimus ex. Animi placeat laboriosam
          rem tempora cumque sapiente velit, quae esse expedita vero!
        </p>
      </div>

      <div className="my-16 flex justify-between">
        {topDoctors?.map(({ id, image, name, title, rating, available ,price }) => (
          <Card
            key={id}
            className="mt-6 w-72 rounded-none border border-[#E6E6E6]"
          >
            <CardHeader
              color="blue-gray"
              className="relative h-40 rounded-none"
            >
              <img src={image} className="object-cover" />
            </CardHeader>
            <CardBody className="space-y-2">
              <Typography variant="h4" className="mb-1">
                {name}
              </Typography>
              <Typography variant="h6" className="mb-1">
                {title}
              </Typography>
              <Typography>
                <Rating value={Math.floor(rating)} readonly />
              </Typography>
              <Typography className="flex items-center gap-x-2">
                  <AiOutlineDollarCircle size={20}/>{price}
              </Typography>
              <Typography>{available}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="outlined" fullWidth className="rounded-none">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctor;
