import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState, useRef } from "react";

function App() {
  const [form, setForm] = useState({ nome: "", sobrenome: "", idade: "" });
  const [user, setUser] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    setUser(form);
    setForm({ nome: "", sobrenome: "", idade: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Registro de Usuário</h1>

        <form onSubmit={handleRegister} className="mb-6 border p-4 rounded">
          <h2 className="font-semibold mb-4">Registro de Usuário</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Primeiro nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="border p-2 rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={form.sobrenome}
              onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
              className="border p-2 rounded w-1/3"
            />
            <input
              type="number"
              placeholder="Idade"
              value={form.idade}
              onChange={(e) => setForm({ ...form, idade: e.target.value })}
              className="border p-2 rounded w-1/3"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
          >
            Registrar
          </button>
        </form>

        {user && (
          <p>
            Usuário registrado:{" "}
            <strong>
              {user.nome} {user.sobrenome}
            </strong>
            , {user.idade} anos.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
