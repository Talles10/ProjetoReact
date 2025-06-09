import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada: ${mensagem}`);
    setMensagem("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Form Básico</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded border"
        >
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <input
            type="text"
            placeholder="Digite algo..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
