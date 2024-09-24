import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/slices/userSlice";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();

  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const loginUser = async (data: Inputs) => {
    await axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/user/login`, data)
      .then((response) => {
        setLoginError("");
        console.log(response);
        const res = response.data.data;
        dispatch(
          setUser({
            token: res.accessToken,
            name: res.userData.username,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401 || err.status === 404) {
          setLoginError("Invalid credentials");
        } else setLoginError("Sorry, something went wrong");
      });
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="z-10 shadow-md p-5 md:p-10 rounded-lg w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            width={200}
            className="mb-5"
          />
          <p className="text-slate-500 mb-3">Welcome Back!!!</p>
          <h3 className="text-5xl font-semibold mb-10">Sign In</h3>
          {loginError && (
            <span className="text-red-500 mb-1">{loginError}</span>
          )}
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
              <p className="text-sm text-slate-500 lg:hover:text-blue-500 text-end mt-1 cursor-pointer">
                Forgot Password ?
              </p>
            </div>
            <Button variant="orange" className="rounded-full font-semibold">
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
      <img
        src="/assets/login-img.png"
        className="hidden lg:block absolute bottom-1 lg:right-[3%] xl:right-[18%] 2xl:right-[23%] lg:w-[300px] xl:w-[400px] 2xl:w-[500px]"
      />
    </>
  );
};

export default Login;
