import React from "react";

interface CollectionCardProps {
  data: {
    img: string;
    title: string;
    id: number;
  };
}

const CollectionCard: React.FC<CollectionCardProps> = ({ data }) => {
  return (
    <div className="relative cursor-pointer text-left rounded-2xl overflow-hidden group transform transition-transform duration-200 hover:scale-105">
      <img
        src={data.img}
        alt={data.title}
        className="h-[500px] w-full rounded-2xl"
      />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-30 rounded-2xl" />
      <h5 className="absolute bottom-4 left-3 text-2xl font-medium text-white z-10">
        {data.title}
      </h5>
    </div>
  );
};

export default CollectionCard;
