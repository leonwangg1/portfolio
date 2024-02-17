import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-center gap-5 text-sm lg:text-lg">
      <Link to="/" className="py-2">
        Home
      </Link>
      <a href="#work" className="py-2">
        Projects
      </a>
      <Link to="/blog" className="py-2">
        Blog
      </Link>
      <Link
        to="https://drive.google.com/file/d/196Y67TvoLsgxrqNbGI5HtaWB8c9g8u6M/view?usp=sharing"
        target="_blank"
      >
        <button className="bg-transparent border border-[#4b4b4f] hover:bg-[#4b4b4f] text-white py-2 px-5 rounded-full">
          Resume
        </button>
      </Link>
    </div>
  );
};
