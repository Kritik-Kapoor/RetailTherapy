import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const registerUser = async (data: Inputs) => {
    await axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/user/register`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="h-screen flex items-center justify-center">
        <div className="z-10 shadow-md p-5 md:p-10 rounded-lg w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            width={200}
            className="mb-5"
          />
          <h3 className="text-5xl font-semibold mb-2">Sign Up</h3>
          <p className="mb-10 text-slate-500">
            Get free shipping, discount vouchers and members only products when
            you’re in velvet club.
          </p>
          <form
            onSubmit={handleSubmit(registerUser)}
            className="space-y-5 text-center"
          >
            <div>
              <Input
                type="username"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                })}
                required
              />
              {errors.username && (
                <p role="alert" className="form-error">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
                required
              />
              {errors.email && (
                <p role="alert" className="form-error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Passowrd"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Minimum length 7 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum length 16 characters",
                  },
                })}
                required
              />
              {errors.password && (
                <p role="alert" className="form-error">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button variant="orange" className="rounded-full">
              SIGN UP <IconArrowNarrowRight stroke={1.25} className="ml-2" />
            </Button>
            <p className="text-slate-400 text-sm">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#F47458] font-medium">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <img
        src="/assets/login-img.png"
        className="hidden lg:block absolute bottom-1 lg:right-[3%] xl:right-[18%] 2xl:right-[23%] lg:w-[300px] xl:w-[400px] 2xl:w-[500px]"
      />
    </div>
  );
};

export default Register;
