import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel/carousel";
import { Button } from "../button";
import Autoplay from "embla-carousel-autoplay";

const CarouselComponent: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  // const bgUrls = [
  //   "/assets/male-model.png",
  //   "/assets/female-model.png",
  //   "/assets/male-model-2.png",
  // ];

  return (
    <Carousel plugins={[plugin.current]} className="mx-auto">
      <CarouselContent className="relative">
        <CarouselItem className="bg-[url('/assets/new-arrivals.png')] bg-cover bg-top h-[70vh]">
          <div className="z-10 text-white flex flex-col items-center justify-center bg-black bg-opacity-50 pb-10 h-full">
            <div className="pt-10 space-y-5 text-center">
              <h2 className="text-5xl">New Arrivals</h2>
              <h6 className="text-5xl font-thin">Winter Wear</h6>
            </div>
            <Button variant="secondary" size="lg" className="py-3 mt-14">
              SHOP NOW
            </Button>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-[url('/assets/female-model.png')] bg-cover bg-center h-[70vh]">
          <div className="z-10 text-white flex flex-col items-center justify-center bg-black bg-opacity-50 pb-10 h-full w-full">
            <div className="pt-10 space-y-5 text-center">
              <h2 className="text-5xl">Women</h2>
              <h6 className="text-5xl font-thin">
                Explore Your True Creative Fashion
              </h6>
            </div>
            <Button variant="secondary" size="lg" className="py-3 mt-14">
              SHOP NOW
            </Button>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-[url('/assets/male-model.png')] bg-cover bg-center h-[70vh]">
          <div className="z-10 text-white flex flex-col items-center justify-center bg-black bg-opacity-50 pb-10 h-full w-full">
            <div className="pt-10 space-y-2 text-center">
              <h2 className="text-5xl">Men</h2>
              <h6 className="text-5xl font-thin">Stay Cozy, Look Sharp</h6>
            </div>
            <Button variant="secondary" size="lg" className="py-3 mt-14">
              SHOP NOW
            </Button>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
