import { Link } from "react-router-dom";
import Logo_head from "../../assets/logo_head.png";

function navbar() {
  return (
    <nav className="bg-[#111827] text-white py-4 shadow-lg border-b border-[#e5e7eb]/10">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img src={Logo_head} alt="NexaBit Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">NexaBit</h1>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-[#f97316] transition duration-300 font-medium">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#f97316] transition duration-300 font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
