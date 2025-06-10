import { useState, useEffect } from "react";
import "./App.css";

const texto = " Este é um letreiro animado uhulllllll =)";

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texto.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="min-h-[20vh] flex items-center justify-center bg-black text-white text-2xl font-mono p-4">
      <h1>
        {texto.slice(0, index)}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}
