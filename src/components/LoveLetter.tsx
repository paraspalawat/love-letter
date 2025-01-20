import { useState } from "react";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="text-center mb-6">
        <h2 className="font-script text-3xl text-love mb-2">Dear Simmon</h2>
        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <p className="text-gray-700 leading-relaxed mb-4">
          "Your smile is a light in the darkest days, and your laughter is the sweetest melody I've ever heard."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
          "Your kindness, intelligence, and strength continue to inspire me, and I am in awe of the person you are every single day."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
          "There’s no one else who could ever compare to you — in your eyes, I see the world, and in your heart, I find my home."
          </p>
          <p className="font-script text-xl text-love-dark">
            With all my love ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;