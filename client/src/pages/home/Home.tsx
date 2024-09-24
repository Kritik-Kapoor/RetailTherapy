import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import CarouselComponent from "../../../components/ui/carousel/CarouselComponent";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
    </div>
  );
};

export default Home;
