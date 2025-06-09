import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [frutas] = useState(["Maçã", "Banana", "Cereja"]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Lista de Frutas</h1>
      <ul className="border rounded">
        {frutas.map((fruta, i) => (
          <li key={i} className="border-b px-4 py-2 last:border-b-0">
            {fruta}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
