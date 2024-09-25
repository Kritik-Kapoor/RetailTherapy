import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel/carousel";
import { Button } from "../button";
import Autoplay from "embla-carousel-autoplay";
import carouselData from "../../../json/HomeHeroSection.json";

const CarouselComponent: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]} className="mx-auto">
      <CarouselContent className="relative">
        {carouselData.slides.length > 0
          ? carouselData.slides.map((slide) => (
              <CarouselItem
                key={slide.url}
                style={{ backgroundImage: `url(${slide.img})` }}
                className="bg-cover bg-top h-[70vh]"
              >
                <div className="z-10 text-white flex flex-col items-center justify-center bg-black bg-opacity-50 pb-10 h-full">
                  <div className="pt-10 space-y-5 text-center">
                    <h2 className="text-5xl">{slide.heading}</h2>
                    <h6 className="text-5xl font-thin">{slide.subHeading}</h6>
                  </div>
                  <Button variant="secondary" size="lg" className="py-3 mt-14">
                    SHOP NOW
                  </Button>
                </div>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
