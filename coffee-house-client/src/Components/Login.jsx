import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch("https://coffee-house-server-one.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {});
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h1 className="text-2xl font-bold text-center">
            Login to your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-lg absolute top-12 right-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-blue-500 font-semibold"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5 px-8">
            <button className="btn btn-primary w-full">
              Sign Up With{" "}
              <span className="text-xl text-white">
                <FcGoogle />
              </span>
            </button>
          </div>
          <h1 className="text-center">
            Don't have account?{"  "}
            <Link className="text-blue-400 font-bold" to="/register">
              Register
            </Link>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
