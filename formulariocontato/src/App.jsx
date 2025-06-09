import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simulando envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSucesso(true);
    setEnviando(false);
    
    // Resetar o formulário após 2 segundos
    setTimeout(() => {
      setFormData({ nome: "", email: "", mensagem: "" });
      setSucesso(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-soft rounded-2xl p-8 w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-800 mb-2">Fale Conosco</h1>
          <p className="text-gray-600">Estamos aqui para ajudar. Entre em contato!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              name="mensagem"
              required
              placeholder="Digite sua mensagem aqui..."
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={enviando || sucesso}
            className={`w-full py-3 px-6 rounded-xl text-white font-medium transition-all duration-200
              ${enviando || sucesso 
                ? 'bg-primary-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 active:transform active:scale-[0.98]'
              }
            `}
          >
            {enviando ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : sucesso ? (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Mensagem Enviada!
              </span>
            ) : (
              'Enviar Mensagem'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
