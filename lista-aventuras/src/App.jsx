import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [aventuras, setAventuras] = useState(["Viajar", "Aprender Piano"]);
  const [novaAventura, setNovaAventura] = useState("");

  function adicionarAventura() {
    if (novaAventura.trim() !== "") {
      setAventuras([...aventuras, novaAventura]);
      setNovaAventura("");
    }
  }

  function removerAventura(index) {
    const novas = aventuras.filter((_, i) => i !== index);
    setAventuras(novas);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Aventuras</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nova aventura"
          value={novaAventura}
          onChange={(e) => setNovaAventura(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={adicionarAventura}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {aventuras.map((aventura, index) => (
          <li
            key={index}
            className="flex justify-between items-center border px-3 py-1 rounded"
          >
            {aventura}
            <button
              onClick={() => removerAventura(index)}
              className="text-red-500 border border-red-500 px-2 py-0.5 rounded"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
