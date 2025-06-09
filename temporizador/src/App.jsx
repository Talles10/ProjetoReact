import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useEffect, useState } from "react";

export default function App() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatar = (n) => n.toString().padStart(2, "0");

  const horas = formatar(horaAtual.getHours());
  const minutos = formatar(horaAtual.getMinutes());
  const segundos = formatar(horaAtual.getSeconds());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">🕒 Relógio em tempo real</h1>
      <div className="text-7xl font-mono bg-gray-900 px-10 py-6 rounded-2xl shadow-xl">
        {horas}:{minutos}:{segundos}
      </div>
    </div>
  );
}
