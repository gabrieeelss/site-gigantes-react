import { useState, useEffect } from "react";
import './Pdfs.css'

function Contabilidade() {
  const [pdfsPorAno, setPdfsPorAno] = useState({});

  useEffect(() => {
    fetch("./json/pdfs-contabilidade.json")
      .then(res => res.json())
      .then(data => setPdfsPorAno(data))
      .catch(error => {
        console.error("Erro ao carregar os PDFs:", error);
      });
  }, []);

  // Ordenar anos do maior para o menor
  const anosOrdenados = Object.keys(pdfsPorAno).sort((a, b) => b - a);

  return (
    <div className="pdf-section">
      <div className="titulo-header">
        <img src="../src/assets/img/geral/contabilidade.png" className="titulo-img" alt="Contabilidade" />
        <h1 className="titulo-header-h1">DRE E BALANÇO PATRIMONIAL</h1>
      </div>

      <div className="pdf-grid" id="pdf-grid-contabilidade">
        {anosOrdenados.map((ano) => (
          <div key={ano} className="pdf-coluna">
            <h2>{ano}</h2>
            <ul className="pdf-lista">
              {pdfsPorAno[ano].map((pdf, index) => (
                <li key={index}>
                  <a href={`arquivos/contabilidade/${pdf.arquivo}`} target="_blank" rel="noopener noreferrer">
                    {pdf.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contabilidade;
