import React from "react";
import { IconUser, IconBriefcase2 } from "@tabler/icons-react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white py-3 px-10 flex items-center justify-between">
      <img src="/assets/logo.png" alt="company Logo" width={200} />
      <ul className="flex items-center gap-x-10">
        <li className="font-medium hover:border-b-2 hover:-mb-[2px] border-black cursor-pointer">
          MEN
        </li>
        <li className="font-medium hover:border-b-2 hover:-mb-[2px] border-black cursor-pointer">
          WOMEN
        </li>
        <li className="font-medium hover:border-b-2 hover:-mb-[2px] border-black cursor-pointer">
          KIDS
        </li>
        <li className="font-medium hover:border-b-2 hover:-mb-[2px] border-black cursor-pointer">
          SALE
        </li>
        <li className="font-medium hover:border-b-2 hover:-mb-[2px] border-black cursor-pointer">
          NEW & FEATURED
        </li>
      </ul>
      <div className="flex items-center gap-x-7">
        <p className="flex items-center gap-x-1 font-medium cursor-pointer">
          <IconUser stroke={1.5} /> Account
        </p>
        <p className="flex items-center gap-x-1 font-medium cursor-pointer">
          <IconBriefcase2 stroke={1.5} /> Cart
        </p>
      </div>
    </div>
  );
};

export default Navbar;
