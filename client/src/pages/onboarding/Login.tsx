import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const loginUser = () => {};

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 h-screen flex items-center justify-center">
        <div className="shadow-md p-10 rounded-lg w-7/12">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            width={200}
            className="mb-5"
          />
          <p className="text-slate-500 mb-3">Welcome Back!!!</p>
          <h3 className="text-5xl font-semibold mb-10">Sign In</h3>
          <form
            onSubmit={handleSubmit(loginUser)}
            className="space-y-5 text-center"
          >
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
              <p className="text-sm text-slate-500 hover:text-blue-500 text-end mt-1 cursor-pointer">
                Forgot Password ?
              </p>
            </div>
            <Button variant="orange" className="rounded-full">
              SIGN IN <IconArrowNarrowRight stroke={1.25} className="ml-2" />
            </Button>
            <p className="text-slate-400 text-sm">
              I don't have an account ?{" "}
              <Link to="/register" className="text-[#F47458] font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-span-2 bg-[#FFEDE1]">
        <img
          src="/assets/login-img.png"
          width={400}
          className="absolute bottom-1 right-[15%]"
        />
      </div>
    </div>
  );
};

export default Login;
