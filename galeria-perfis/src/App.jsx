import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Perfil({ nome, imagem }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        margin: 10,
      }}
    >
      <h2>{nome}</h2>
      <img
        src={imagem}
        alt={nome}
        style={{ width: 100, borderRadius: "50%" }}
      />
    </div>
  );
}

function Galeria() {
  const perfis = [
    {
      nome: "Ada Lovelace",
      imagem: "https://i.imgur.com/MK3eW3As.jpg",
    },
    {
      nome: "Ada Lovelace",
      imagem: "https://i.imgur.com/MK3eW3As.jpg",
    },
    {
      nome: "Ada Lovelace",
      imagem: "https://i.imgur.com/MK3eW3As.jpg",
    },
  ];

  return (
    <div>
      <h2>Galeria</h2>
      {perfis.map((perfil, index) => (
        <Perfil key={index} nome={perfil.nome} imagem={perfil.imagem} />
      ))}
    </div>
  );
}

function Item({ nome, empacotado }) {
  return (
    <li style={{ color: empacotado ? "green" : "black" }}>
      {nome} {empacotado ? "✓" : ""}
    </li>
  );
}

function ListaDeViagem() {
  const itens = [
    { nome: "Roupas", empacotado: true },
    { nome: "Carregador", empacotado: true },
    { nome: "Video Game ", empacotado: true },
    { nome: "Tênis", empacotado: false },
    { nome: "Toalha", empacotado: true },
    { nome: "Escova de Dentes", empacotado: false },
    { nome: "Desodorante", empacotado: true },
    { nome: "Câmera Fotográfica", empacotado: true },
    { nome: "Livro", empacotado: false },
  ];

  return (
    <div>
      <h2>Lista de Viagem</h2>
      <ul>
        {itens.map((item, index) => (
          <Item key={index} nome={item.nome} empacotado={item.empacotado} />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Semana 3 - Componentes React</h1>
      <h2>Galeria de Perfis</h2>
      <Galeria />
      <h1>Lista de Viagem</h1>
      <ListaDeViagem />
    </div>
  );
}
