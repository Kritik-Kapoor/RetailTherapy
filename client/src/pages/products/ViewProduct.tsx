import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Products from "../../../json/ProductsData.json";
import "./product.css";
import { Button } from "../../../components/ui/button";
import { IconHeart } from "@tabler/icons-react";

const ViewProduct: React.FC = () => {
  const { id } = useParams();

  const product = Products.products.filter((prod) => prod.id === Number(id));

  console.log(product);
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("xs");

  return (
    <section>
      <Navbar />
      <div className="container grid grid-cols-2 p-7">
        <div className="flex gap-5">
          <div className="w-1/5 flex flex-col items-center gap-2.5">
            {product[0].allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Other product img"
                className="h-[150px]"
                onClick={() => setSelectedImg(index)}
              />
            ))}
          </div>
          <div className="w-4/5">
            <img
              src={product[0].allImages[selectedImg]}
              alt="Main Product Img"
              className="h-[700px]"
            />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl">{product[0].title}</h1>
          <p className="text-lg">
            INR {product[0].price} <br />
            <span className="text-base">(incl. of all taxes)</span>
          </p>
          <div>
            <p className="mb-2 tracking-widest">SIZE</p>
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
      <Footer />
    </section>
  );
};

export default ViewProduct;
