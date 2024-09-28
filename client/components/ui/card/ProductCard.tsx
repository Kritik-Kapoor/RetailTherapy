import React, { useState } from "react";

interface ProductCardProps {
  data: {
    image: string;
    hoverImage: string;
    title: string;
    subtitle: string;
    price: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(data.image);

  return (
    <div
      onMouseEnter={() => setImgSrc(data.hoverImage)}
      onMouseLeave={() => setImgSrc(data.image)}
      className="cursor-pointer text-left"
    >
      <img
        src={imgSrc}
        alt={data.title}
        className="min-w-[150px] md:min-w-[230px] lg:w-[330px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[395px]"
      />
      <div className="space-y-1 mt-2">
        <h3 className="font-semibold text-xs lg:text-sm xl:text-base">
          {data.title}
        </h3>
        <h5 className="font-light text-xs lg:text-sm whitespace-normal break-words">
          {data.subtitle}
        </h5>
        <p className="text-xs lg:text-sm text-slate-600">INR {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
