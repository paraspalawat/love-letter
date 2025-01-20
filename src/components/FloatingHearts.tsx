import { useEffect, useCallback } from "react";

const FloatingHearts = () => {
  const createHeart = useCallback((x: number, y: number) => {
    const heart = document.createElement("div");
    heart.className = "heart-particle absolute text-love";
    heart.innerHTML = "❤";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createHeart(e.clientX, e.clientY);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [createHeart]);

  return null;
};

export default FloatingHearts;