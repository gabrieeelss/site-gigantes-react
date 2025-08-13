import React, { useEffect, useState } from "react";
import './Pdfs.css';

function Projetos() {
  const [projetos, setProjetos] = useState({
    fiec: [],
    cbcp: [],
    lei: [],
  });

  useEffect(() => {
    fetch("./json/projetos.json")
      .then((res) => res.json())
      .then((data) => {
        setProjetos(data);
      })
      .catch((err) => console.error("Erro ao carregar projetos:", err));
  }, []);

  const renderLista = (arquivos, pasta) =>
    arquivos.map((pdf, index) => (
      <li key={index}>
        <a
          href={`arquivos/${pasta}/${pdf.arquivo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pdf.nome}
        </a>
      </li>
    ));

  return (
    <section className="pdf-section">
      <div className="titulo-header">
        <img src="./img/projeto.png" className="titulo-img" alt="Projetos" />
        <h1 className="titulo-header-h1">Projetos</h1>
      </div>

      <div className="pdf-grid">
        <div className="pdf-coluna" id="pdf-fiec">
          <h1 className="titulo-h1">📂 FIEC</h1>
          <p className="subtitulo-p">
            Fundo de Investimento Esportivo de Campinas-SP
          </p>
          <ul className="pdf-lista">{renderLista(projetos.fiec, "fiec")}</ul>
        </div>

        <div className="pdf-coluna" id="pdf-cbcp">
          <h1 className="titulo-h1">📂 CBCP</h1>
          <p className="subtitulo-p">
            Comitê Brasileiro de Clubes Paralímpicos
          </p>
          <ul className="pdf-lista">{renderLista(projetos.cbcp, "cbcp")}</ul>
        </div>

        <div className="pdf-coluna" id="pdf-lei">
          <h1 className="titulo-h1">📂 Lei Federal</h1>
          <p className="subtitulo-p">
            Lei de Incentivo ao Esporte - Governo Federal
          </p>
          <ul className="pdf-lista">
            {renderLista(projetos.lei, "lei-federal")}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
