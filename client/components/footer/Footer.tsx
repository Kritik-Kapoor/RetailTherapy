import React from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import "./footer.css";

type Inputs = {
  email: string;
};

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //Store this email in db and send emails
  const subscribe = () => {};

  return (
    <footer className="py-10 px-5 md:px-10 xl:px-20 border-t grid grid-cols-2 lg:grid-cols-4 gap-x-5 xl:gap-x-10 gap-y-5">
      <div className="col-span-2 md:col-span-1 space-y-10">
        <img src="/assets/logo.png" alt="Company Logo" width={200} />
        <form onSubmit={handleSubmit(subscribe)} className="space-y-2">
          <p className="text-sm font-medium">
            Subscribe now and be the first to know about exclusive offers,
            latest fashion trends & style tips!
          </p>
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-10/12"
              required
            />
            {errors.email && (
              <p role="alert" className="form-error">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button size="sm">Subscribe</Button>
        </form>
      </div>
      <div className="col-span-2 md:col-span-1 footer-list">
        <h6 className="footer-list-header">GET TO KNOW US</h6>
        <p className="footer-list-items">CONTACT US</p>
        <p className="footer-list-items">FAQ's</p>
        <p className="footer-list-items">TERMS & CONDITIONS</p>
      </div>
      <div className="col-span-2 md:col-span-1 footer-list">
        <h6 className="footer-list-header">TRACK OR RETURN/EXCHANGE ORDER</h6>
        <p className="footer-list-items">TRACK ORDER</p>
        <p className="footer-list-items">PLACE RETURN/EXCHANGE REQUEST</p>
        <p className="footer-list-items">RETURNS/EXCHANGE POLICY</p>
      </div>
      <div className="col-span-2 md:col-span-1 footer-list">
        <h6 className="footer-list-header">CUSTOMER CARE</h6>
        <p className="flex items-center gap-x-2 footer-list-items">
          <IconBrandWhatsapp stroke={1.5} /> <span>+91 9642300724</span>
        </p>
        <p className="flex items-center gap-x-2 footer-list-items">
          <IconMail stroke={1.5} /> <span>kritik0401@gmail.com</span>
        </p>
      </div>
      <p className="col-span-2 lg:col-span-4 text-center mt-5 flex items-center justify-center">
        &#169; 2024, Built with ❤️ by
        <a
          href="https://kritik-kapoor-portfolio.vercel.app/"
          target="_blank"
          className="text-blue-500 ms-1 flex items-center gap-x-1"
        >
          Me!
          <img src="/assets/kritik.png" alt="Kritik Img" width={22} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
