import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductsList from "../../../json/ProductsData.json";
import "./product.css";
import { Button } from "../../../components/ui/button";
import { IconHeart } from "@tabler/icons-react";
import ProductCard from "../../../components/ui/card/ProductCard";

const ViewProduct: React.FC = () => {
  const { id } = useParams();

  const product = ProductsList.products.filter(
    (prod) => prod.id === Number(id)
  );

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("xs");

  return (
    <section>
      <Navbar />
      <div className="container grid grid-cols-2 gap-5 p-0 md:p-7 mt-16 lg:mt-0">
        <div className="col-span-2 lg:col-span-1 flex flex-col xl:flex-row gap-3 mb-10 lg:mb-0">
          <div className="hidden w-1/5 xl:flex flex-col items-center gap-2.5">
            {product[0].allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Other product img"
                className="w-full h-[150px]"
                onClick={() => setSelectedImg(index)}
              />
            ))}
          </div>
          <div className="w-full xl:w-4/5 flex items-center xl:items-start justify-center">
            <img
              src={product[0].allImages[selectedImg]}
              alt="Main Product Img"
              className="h-[700px]"
            />
          </div>
          <ol className="flex items-center justify-center gap-x-1 xl:hidden">
            {product[0].allImages.map((_, index) => (
              <li
                className={`dot ${selectedImg === index && "is-selected"}`}
                onClick={() => setSelectedImg(index)}
              ></li>
            ))}
          </ol>
        </div>
        <div className="col-span-2 lg:col-span-1 space-y-5 p-7 md:p-0">
          <h1 className="text-4xl">{product[0].title}</h1>
          <p className="text-lg">
            INR {product[0].price} <br />
            <span className="text-base">(incl. of all taxes)</span>
          </p>
          <div>
            <p className="font-semibold">Description</p>
            <p>{product[0].info?.description}</p>
          </div>
          <div>
            <p className="font-semibold">Fit</p>
            <p>{product[0].info?.fit}</p>
          </div>
          <div>
            <p className="font-semibold">Model</p>
            <p>{product[0].info?.model}</p>
          </div>
          <div>
            <p className="font-semibold">Manufactured In</p>
            <p>{product[0].info?.country}</p>
          </div>
          <div>
            <p className="mb-2 tracking-widest">SELECT A SIZE</p>
            <div className="flex items center gap-2">
              {product[0].size.map((value) => (
                <p
                  className={`w-[40px] h-[40px] flex items-center justify-center border border-black rounded-xl text-xs uppercase p-1 transition-colors hover:bg-black hover:text-white hover:shadow-lg cursor-pointer ${
                    selectedSize === value.size
                      ? "bg-black text-white"
                      : "bg-transparent"
                  }`}
                  onClick={() => setSelectedSize(value.size)}
                  key={value.size}
                >
                  {value.size}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2 !mt-20">
            <Button
              size="lg"
              variant="dark"
              className="w-full tracking-widest rounded-none"
            >
              ADD TO BAG
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full tracking-widest text-red-500 hover:text-red-500 rounded-none"
            >
              <IconHeart className="mr-2 text-black" /> ADD TO WISHLIST
            </Button>
          </div>
        </div>
      </div>
      <div className="my-36 md:container text-center md:px-0 xl:p-5">
        <h4 className="text-3xl my-7 text-center">RECENTLY VIEWED</h4>
        <div className="flex items-start mt-10 mb-5 gap-3 p-5 md:px-10 xl:px-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {ProductsList.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ViewProduct;
