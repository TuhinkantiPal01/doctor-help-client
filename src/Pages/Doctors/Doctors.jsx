import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Rating, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  
  
  

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section>
      <div>
        <div className="appointment h-72 flex justify-center pt-6">
          <Breadcrumbs>
            <Link to="/" className="bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <Link to="/doctors">Doctors</Link>
          </Breadcrumbs>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 place-items-center my-20 gap-y-10">
          {doctors.map(({id , image ,title ,name ,rating , price , available}) => (
            <Card
            key={id}
            className="mt-6 w-72 rounded-none "
          >
            <CardHeader
              color="blue-gray"
              className="relative h-40 rounded-none"
            >
              <img src={image} className="object-cover" />
            </CardHeader>
            <CardBody className="space-y-2">
              <Typography variant="h5" className="mb-1">
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
    </section>
  );
};

export default Doctors;
