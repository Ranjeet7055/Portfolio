import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    
    <nav className="w-full bg-gray-900 text-white fixed top-0 z-10 shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`md:flex md:space-x-6 ${open ? "block" : "hidden"} md:block`}>
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
