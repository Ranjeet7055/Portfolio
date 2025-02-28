import { useState } from "react";
import { motion } from "framer-motion";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      feedback,
    };

    try {
      await fetch("https://your-email-server.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Feedback sent successfully!");
    } catch (error) {
      alert("Error sending feedback.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Left Side - Photo & Contact Info */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="md:w-1/2 w-full flex flex-col items-center text-center md:text-left mb-6 md:mb-0"
      >
        <img 
          src="/t.jpg" 
          alt="Ranjeet Yadav" 
          className="w-48 h-48 rounded-full shadow-lg mb-4 border-4 border-blue-500 object-cover"
        />
        <h2 className="text-2xl font-bold">Ranjeet Yadav</h2>
        <p className="text-lg">Contact: +91 7055768901</p>
      </motion.div>

      {/* Right Side - Feedback Form */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="md:w-1/2 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Feedback"
            className="w-full p-3 border rounded bg-gray-800 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300 sm:text-sm"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-all sm:text-sm"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default FeedbackForm;