import { motion } from "framer-motion";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiOpencv } from "react-icons/si";

const projects = [
  {
    title: "College Management System",
    desc: (
      <ol className="list-decimal list-inside">
        <li>Developed a user authentication system allowing sign-ups and logins.</li>
        <li>Implemented CRUD operations for course management.</li>
        <li>Enhanced user experience with a responsive interface.</li>
      </ol>
    ),
    img: "images (1).png",
    github: "https://github.com/Ranjeet7055/college-management-system",
    techStack: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, SiMongodb, SiExpress],
  },
  {
    title: "Object Detection and Tracking System",
    desc: (
      <ol className="list-decimal list-inside">
        <li>Developed a system to analyze player movement in sports.</li>
        <li>Utilized facial recognition algorithms to track objects without human intervention.</li>
        <li>Improved accuracy in real-time tracking and performance analysis.</li>
      </ol>
    ),
    img: "sport.jpg",
    github: "https://github.com/Ranjeet7055/object-detection-tracking",
    techStack: [FaPython, SiOpencv, FaDatabase],
  },
  {
    title: "Food Delivery System",
    desc: (
      <ol className="list-decimal list-inside">
        <li>Designed and developed a user-friendly registration and login system.</li>
        <li>Implemented secure authentication and authorization mechanisms.</li>
        <li>Integrated a delivery agent interface to streamline order deliveries.</li>
      </ol>
    ),
    img: "images.png",
    github: "https://github.com/Ranjeet7055/food-delivery-system",
    techStack: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, SiTailwindcss, FaDatabase],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white text-center w-full overflow-hidden">
  <h2 className="text-4xl font-bold mb-10">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto w-full">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="w-full bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
      >
        <img src={project.img} alt={project.title} className="w-full h-48 rounded-lg mb-4 " />
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="text-gray-300 text-sm mb-4">{project.desc}</div>

        {/* Tech Stack */}
        <div className="flex justify-center gap-3 my-4 flex-wrap">
          {project.techStack.map((Icon, i) => (
            <motion.div
              key={i}
              className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="text-3xl text-yellow-200" />
            </motion.div>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition"
        >
          <FaGithub className="text-xl text-white" />
          <span>View on GitHub</span>
        </a>
      </motion.div>
    ))}
  </div>
</section>
  );
};

export default Projects;
