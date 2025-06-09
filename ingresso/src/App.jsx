import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("pista");
  const [quantidade, setQuantidade] = useState(1);
  const [resumo, setResumo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumo({ nome, tipo, quantidade });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Compra de Ingresso
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nome:</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-2"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tipo de Ingresso:</label>
            <select
              className="w-full border rounded-xl px-4 py-2"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="pista">Pista</option>
              <option value="cadeira">Cadeira</option>
              <option value="vip">VIP</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Quantidade:</label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-xl px-4 py-2"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Comprar
          </button>
        </form>

        {resumo && (
          <div className="mt-6 text-center">
            <p className="font-medium">🎟️ Compra confirmada!</p>
            <p>Nome: {resumo.nome}</p>
            <p>Tipo: {resumo.tipo}</p>
            <p>Quantidade: {resumo.quantidade}</p>
          </div>
        )}
      </div>
    </div>
  );
}
