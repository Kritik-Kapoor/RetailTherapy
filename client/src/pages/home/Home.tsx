import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import CarouselComponent from "../../../components/ui/carousel/CarouselComponent";
import brandsData from "../../../json/TopBrands.json";
import { Button } from "../../../components/ui/button";
import ProductCard from "../../../components/ui/card/ProductCard";
import ProductsList from "../../../json/ProductsData.json";

const Home: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState("new");

  return (
    <section>
      <Navbar />
      <CarouselComponent />
      <div className="py-20">
        <h4 className="text-5xl font-semibold my-7 text-center">Top Brands</h4>
        <div className="flex items-center justify-around">
          {brandsData.brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.img}
              alt={brand.name}
              title={brand.name}
              className="w-[100px] h-[100px] rounded-full"
            />
          ))}
        </div>
      </div>
      <div className="py-20 px-0 container">
        <div className="text-center space-x-5">
          <Button
            variant={activeBtn === "new" ? "dark" : "outline"}
            className="rounded-full"
            onClick={() => setActiveBtn("new")}
          >
            NEW DROPS
          </Button>
          <Button
            variant={activeBtn === "trending" ? "dark" : "outline"}
            className="rounded-full"
            onClick={() => setActiveBtn("trending")}
          >
            MOST TRENDING
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-x-5 px-0 py-20">
          {ProductsList.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
