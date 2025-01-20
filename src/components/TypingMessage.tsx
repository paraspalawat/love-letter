const TypingMessage = () => {
  return (
    <div className="relative w-fit mx-auto overflow-hidden">
      <h1 className="font-script text-4xl md:text-6xl text-love-dark whitespace-nowrap animate-type">
        A Love Letter to Simmon
      </h1>
      <div className="absolute top-0 right-0 w-1 h-full bg-love animate-pulse" />
    </div>
  );
};

export default TypingMessage;