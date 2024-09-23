import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-end items-center w-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 p-3 shadow-lg">
      <Link
        to="/"
        className="px-4 py-1 border-2 border-white rounded-lg text-white font-semibold hover:bg-orange-400"
      >
        Home
      </Link>
      <Link
        to="/signin"
        className="px-4 py-1 border-2 border-white rounded-lg text-white font-semibold hover:bg-orange-400"
      >
        Signin
      </Link>
      <Link
        className="px-4 py-1 border-2 border-white rounded-lg text-white font-semibold hover:bg-orange-400"
        to="/signup"
      >
        Signup
      </Link>
    </div>
  );
};

export default Navbar;
