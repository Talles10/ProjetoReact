import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../data/home";
import Atv01 from "../../Atv01/src/App";
import Temporizador from "../../temporizador/src/App";
import GaleriaPerfis from "../../galeria-perfis/src/App";
import ContadorPessoas from "../../contador-pessoas/src/App";
import Contador3 from "../../contador3/src/App";
import ListaAventuras from "../../lista-aventuras/src/App";
import FormularioBasico from "../../formulariobasico/src/App";
import FormularioContato from "../../formulariocontato/src/App";
import RegistroUsuario from "../../registrousuario/src/App";
import ListaDeFrutas from "../../lista-de-frutas/src/App";
import ToDoList from "../../to-do-list/src/App";
import GerenciadorTarefas from "../../gerenciador-tarefas/src/App";
import FiltroFrameworks from "../../filtro-frameworks/src/App";
import Quiz from "../../quiz/src/App";
import Ingresso from "../../ingresso/src/App";
import Accordion from "../../accordion/src/App";
import ContatosChat from "../../contatos-chat/src/App";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv01" element={<Atv01 />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/galeria-perfis" element={<GaleriaPerfis />} />
        <Route path="/contador-pessoas" element={<ContadorPessoas />} />
        <Route path="/contador3" element={<Contador3 />} />
        <Route path="/lista-aventuras" element={<ListaAventuras />} />
        <Route path="/formulariobasico" element={<FormularioBasico />} />
        <Route path="/formulariocontato" element={<FormularioContato />} />
        <Route path="/registrousuario" element={<RegistroUsuario />} />
        <Route path="/lista-de-frutas" element={<ListaDeFrutas />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/gerenciador-tarefas" element={<GerenciadorTarefas />} />
        <Route path="/filtro-frameworks" element={<FiltroFrameworks />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/ingresso" element={<Ingresso />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/contatos-chat" element={<ContatosChat />} />
      </Routes>
    </BrowserRouter>
  );
}
