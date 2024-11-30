import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const crediteAt = result.user?.metadata?.createdAt;
        const newUser = { email, name, crediteAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
           
          });
        
      })
      .catch((error) => {
        
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center mb-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
        <h1 className="text-2xl font-bold text-center">
          Register a your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
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
          Already have account?{" "}
          <Link className="text-blue-400 font-bold" to="/login">
            Login
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Register;
