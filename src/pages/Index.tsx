import FloatingHearts from "../components/FloatingHearts";
import LoveLetter from "../components/LoveLetter";
import TypingMessage from "../components/TypingMessage";



const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <FloatingHearts />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6 animate-fadeIn">
          <TypingMessage />
          <p className="text-gray-600 text-lg">
            Click anywhere to spread love ❤️
          </p>
        </div>

        <div className="mt-12 animate-float">
          <LoveLetter />
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-love hover:bg-love-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 animate-heartBeat"
            onClick={() => alert("I love you, Simmon! ❤️")}
          >
            Send Love
          </button>
        </div>
      </div>
    </div>
  );
};






export default Index;