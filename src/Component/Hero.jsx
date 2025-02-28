import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pb-10 flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-gray-500 to-black-500 text-white">
      
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4 md:ml-28 md:mt-0 mt-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Ranjeet Yadav</span>
        </h1>
        <p className="text-lg">
          Full Stack Developer | React Enthusiast
        </p>
        <motion.a 
          href="#projects" 
          className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </div>

      {/* Right Side - Profile Photo */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <motion.img 
          src="/hello.jpg" 
          alt="hello" 
          className="w-72 h-96 md:w-80 md:h-96 md:ml-36 object-cover rounded-lg border-4 border-white shadow-lg"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        />
      </div>

    </section>
  );
};

export default Hero;
