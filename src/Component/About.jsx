import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Profile Info (Now the image is on the left) */}
        <div className="w-80 sm:w-96 md:w-1/2 flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
          <img 
            className="h-24 w-24 rounded-full border-4 border-purple-400" 
            src="ranjeet.jpg" 
            alt="ranjeet.jpg" 
          />
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-black">Ranjeet Yadav</p>
            <p className="font-medium text-gray-500">Software Engineer</p>
            <div className="flex">
            <button className="mt-2 px-4 py-2 border border-purple-400 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Message
            </button>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 ml-2 sm:ml-12 lg: ml-60">
              <a href="https://wa.me/7055768901" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600 transition duration-200" />
              </a>
              <a href="https://www.instagram.com/im_ranjeet7055/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/ranjeet-yadav-108000229" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800 transition duration-200" />
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* Right Side - About Me Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="font-bold text-gray-700">
            Motivated and detail-oriented Computer Science graduate seeking a challenging role to apply my technical and managerial skills in a dynamic environment. Passionate about software development, problem-solving, and continuous learning.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
