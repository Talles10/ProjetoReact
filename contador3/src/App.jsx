import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 3);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-6xl font-bold mb-8">{count}</div>
      <button
        onClick={incrementar}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition"
      >
        +3
      </button>
    </div>
  );
}

export default App;
