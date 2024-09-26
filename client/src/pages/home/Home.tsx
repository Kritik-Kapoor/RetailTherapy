import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import CarouselComponent from "../../../components/ui/carousel/CarouselComponent";
import brandsData from "../../../json/TopBrands.json";
import { Button } from "../../../components/ui/button";
import ProductCard from "../../../components/ui/card/ProductCard";
import CollectionCard from "../../../components/ui/card/CollectionCard";
import ProductsList from "../../../json/ProductsData.json";
import CollectionList from "../../../json/Collections.json";

const Home: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState("new");

  return (
    <section>
      <Navbar />
      <CarouselComponent />
      <div className="my-20">
        <h4 className="text-3xl mt-7 mb-16 text-center">TOP BRANDS</h4>
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
      <div className="my-20 px-0 container text-center">
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 px-0 py-20">
          {ProductsList.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        <Button variant="outline" className="rounded-sm">
          VIEW ALL
        </Button>
      </div>
      <div className="mb-20 px-0 container text-center">
        <h4 className="text-3xl my-7 text-center">SEASONAL FAVS</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 px-0 py-20">
          {CollectionList.collections.map((collection) => (
            <CollectionCard key={collection.id} data={collection} />
          ))}
        </div>
      </div>
      <div className="mb-28 grid grid-cols-2 bg-[#F4F1E7] h-full">
        <div className="col-span-2 lg:col-span-1 m-auto space-y-7 py-8 px-14 w-full text-center lg:text-left lg:w-auto">
          <p className="font-semibold text-[#FD8401] text-3xl">
            STAY TUNED TO TRENDS
          </p>
          <h3 className="font-bold text-5xl">
            SIGN UP NOW FOR{" "}
            <span className="hidden lg:inline">
              <br />
            </span>
            EXCLUSIVE FLAT
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            10% OFF*
          </h3>
          <p className="text-2xl font-medium">ON YOUR FIRST PURCHASE</p>
          <Link
            to="/register"
            className="bg-[#F47458] text-white hover:bg-[#d63c1a] dark:hover:bg-[#d63c1a] font-bold text-xl h-11 rounded-lg px-8 inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            SIGN UP
          </Link>
        </div>
        <img
          src="/assets/free-delivery.png"
          alt="Free Delivery"
          className="hidden lg:block w-3/4"
        />
      </div>
      <div className="mb-28 px-0 container text-center">
        <h4 className="text-3xl my-7 text-center">HOT THIS WEEK</h4>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 px-0 py-20">
          {ProductsList.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
