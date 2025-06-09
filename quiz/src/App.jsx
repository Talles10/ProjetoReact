import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [resposta, setResposta] = useState("");
  const [mensagem, setMensagem] = useState("");

  const correta = "b";

  const verificarResposta = (e) => {
    e.preventDefault();
    if (resposta === correta) {
      setMensagem("✅ Resposta correta!");
    } else {
      setMensagem("❌ Tente novamente!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Quiz Rápido</h1>
        <form onSubmit={verificarResposta} className="space-y-4">
          <p className="font-medium">Qual é a capital da França?</p>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="resposta"
              value="a"
              onChange={(e) => setResposta(e.target.value)}
            />
            Roma
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="resposta"
              value="b"
              onChange={(e) => setResposta(e.target.value)}
            />
            Paris
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="resposta"
              value="c"
              onChange={(e) => setResposta(e.target.value)}
            />
            Madri
          </label>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Verificar
          </button>
        </form>

        {mensagem && (
          <p className="mt-4 text-center font-semibold text-lg">{mensagem}</p>
        )}
      </div>
    </div>
  );
}
