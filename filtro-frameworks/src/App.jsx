import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const frameworks = ["React", "Vue", "Angular", "Svelte"];
  const [filtro, setFiltro] = useState("");

  const filtrados = frameworks.filter((fw) =>
    fw.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Filtro de Frameworks</h1>
      <input
        type="text"
        placeholder="Filtrar frameworks"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="border px-2 py-1 mb-2 w-full"
      />
      <ul className="border rounded">
        {filtrados.map((fw, i) => (
          <li key={i} className="border-b px-4 py-2 last:border-b-0">
            {fw}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
