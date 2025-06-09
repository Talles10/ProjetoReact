import { useState } from "react";
import { FaMale, FaFemale, FaRestroom } from "react-icons/fa";
import "./App.css";

function App() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Contador de Pessoas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Card Homens */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <FaMale className="text-blue-500 text-4xl mb-2" />
          <h2 className="text-xl font-semibold mb-2">Homens</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setHomens((prev) => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-2xl font-bold">{homens}</span>
            <button
              onClick={() => setHomens((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Card Mulheres */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <FaFemale className="text-pink-500 text-4xl mb-2" />
          <h2 className="text-xl font-semibold mb-2">Mulheres</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setMulheres((prev) => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-2xl font-bold">{mulheres}</span>
            <button
              onClick={() => setMulheres((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Card Total */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <FaRestroom className="text-green-500 text-4xl mb-2" />
          <h2 className="text-xl font-semibold mb-2">Total</h2>
          <span className="text-3xl font-bold">{total}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
