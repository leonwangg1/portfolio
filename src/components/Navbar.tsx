import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-center gap-5 text-md lg:text-xl">
      <Link to="/">Home</Link>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <Link to="/resume">Resume</Link>
    </div>
  );
};
