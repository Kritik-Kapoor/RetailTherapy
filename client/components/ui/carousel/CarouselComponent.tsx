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

  return (
    <Carousel plugins={[plugin.current]} className="mx-auto">
      <CarouselContent>
        <CarouselItem className="pt-10 bg-[#F4F1EC]">
          <div className="grid grid-cols-4 items-center">
            <img
              src="/assets/male-model-2.png"
              alt="male model"
              width={200}
              className="mt-auto"
            />
            <div className="col-span-3 flex items-center pb-16">
              <div>
                <h1 className="text-7xl font-semibold mb-5">MEN</h1>
                <h3 className="text-4xl font-semibold mb-5">
                  UPGRADE YOUR STYLE WITH OUR LATEST COLLECTION
                </h3>
                <Button variant="orange">SHOP NOW</Button>
              </div>
              <img
                src="/assets/male-model.png"
                alt="male model"
                width={700}
                className="h-[500px] mr-20"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-[#D6D1CD] pt-10">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-3 flex items-center pb-16">
              <img
                src="/assets/female-model-2.png"
                alt="female model"
                width={400}
                className="mt-auto"
              />
              <div>
                <h1 className="text-7xl font-semibold mb-5">WOMEN</h1>
                <h3 className="text-4xl font-semibold mb-5">
                  STAY TRENDY WITH OUR LATEST FASHION
                </h3>
                <Button variant="orange">SHOP NOW</Button>
              </div>
            </div>
            <img
              src="/assets/women-hero.png"
              alt="male model"
              width={300}
              className="mt-auto"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
