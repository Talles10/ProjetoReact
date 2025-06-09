import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const perguntas = [
  {
    pergunta: "O que é React?",
    resposta:
      "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    pergunta: "O que é um componente?",
    resposta: "Componente é uma parte reutilizável da interface em React.",
  },
  {
    pergunta: "O que é estado (state)?",
    resposta:
      "Estado é um objeto que armazena dados dinâmicos de um componente.",
  },
];

export default function App() {
  const [aberta, setAberta] = useState(null);

  const toggle = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Perguntas Frequentes</h1>
        {perguntas.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left font-medium text-lg p-4 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              onClick={() => toggle(index)}
            >
              {item.pergunta}
            </button>
            {aberta === index && (
              <div className="p-4 text-gray-700">{item.resposta}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
