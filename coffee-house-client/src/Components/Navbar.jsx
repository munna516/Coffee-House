import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 mr-5 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/"
      >
        {" "}
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 mr-5 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/addCoffee"
      >
        Add-Coffee
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-xl flex items-center gap-2 mr-5 ${
            isActive ? "btn btn-accent text-white" : ""
          }`
        }
        to="/users"
      >
        Users
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="font-bold text-3xl">
            Coffee House
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `btn text-xl flex items-center  ${
                isActive ? " btn-accent text-white" : ""
              }`
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `btn text-xl flex items-center  ${
                isActive ? "btn-accent text-white" : ""
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
