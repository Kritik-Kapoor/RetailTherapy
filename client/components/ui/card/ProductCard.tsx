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
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  //Add timeout
  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => {
      setImgSrc(data.hoverImage);
    }, 1000);
    setHoverTimeout(timeout);
  };

  //clear timeout
  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setImgSrc(data.image);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <img src={imgSrc} alt={data.title} width={300} className="h-[395px]" />
      <div className="space-y-1 mt-2">
        <h3 className="font-semibold">{data.title}</h3>
        <h5 className="font-light">{data.subtitle}</h5>
        <p className="text-sm text-slate-600">INR {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
