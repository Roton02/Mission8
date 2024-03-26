import { Link, NavLink } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
  
  return (
    <nav className="navbar  bg-base-100">
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
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
      <NavLink to='/' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white ">Home</NavLink>
      <NavLink to='/ListedBooks' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white">Listed Books</NavLink>s
      <NavLink to='/Pages' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white">Pages to Read</NavLink>
          </div>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden space-x-2  lg:flex">
      <NavLink to='/' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white ">Home</NavLink>
      <NavLink to='/ListedBooks' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white">Listed Books</NavLink>
      <NavLink to='/Pages' className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white">Pages to Read</NavLink>
     
      </div>
      <div className="navbar-end ">
      <a
            href=""
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#23BE0A] text-[#23BE0A] text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#23BE0A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#23BE0A] transition duration-300 group-hover:text-white ease">
              Sign In
            </span>
          </a>
          <a
            href="#_"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#59C6D2] text-[#59C6D2] text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#59C6D2] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#59C6D2] transition duration-300 group-hover:text-white ease">
              Sign Up
            </span>
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
