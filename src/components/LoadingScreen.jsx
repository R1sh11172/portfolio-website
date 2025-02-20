import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Loading...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold text-red-500">
        {text} <span className="animate-blink ml-1 text-red-500"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-red-200 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-red-500 shadow-[0_0_15px_#ef4444] animate-loading-bar"></div>
      </div>
    </div>
  );
};
