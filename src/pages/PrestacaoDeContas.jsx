import { useState, useEffect } from "react";
import './Pdfs.css';

function PrestacaoDeContas() {
  const [pdfsFiec, setPdfsFiec] = useState([]);
  const [pdfsCbcp, setPdfsCbcp] = useState([]);
  const [pdfsLei, setPdfsLei] = useState([]);

  useEffect(() => {
    fetch('./json/prestacao-de-contas.json')
      .then(response => response.json())
      .then(pdfs => {
        setPdfsFiec(pdfs.filter(pdf => pdf.categoria === 'FIEC'));
        setPdfsCbcp(pdfs.filter(pdf => pdf.categoria === 'CBCP'));
        setPdfsLei(pdfs.filter(pdf => pdf.categoria === 'Lei Federal'));
      })
      .catch(error => console.error('Erro ao carregar PDFs:', error));
  }, []);

  return (
    <section className="pdf-section">
      <div className="titulo-header">
        <img src="./img/lista-de-itens.png" className="titulo-img" alt="Prestação de Contas" />
        <h1 className="titulo-header-h1">Prestação de Contas</h1>
      </div>
      <div className="pdf-grid">
        <div className="pdf-coluna" id="pdf-fiec">
          <h1 className="titulo-h1">📂 FIEC</h1>
          <p className="subtitulo-p">Fundo de Investimento Esportivo de Campinas-SP</p>
          <ul className="pdf-lista">
            {pdfsFiec.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.arquivo} target="_blank" rel="noopener noreferrer">
                  {pdf.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pdf-coluna" id="pdf-cbcp">
          <h1 className="titulo-h1">📂 CBCP</h1>
          <p className="subtitulo-p">Comitê Brasileiro de Clubes Paralímpicos</p>
          <ul className="pdf-lista">
            {pdfsCbcp.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.arquivo} target="_blank" rel="noopener noreferrer">
                  {pdf.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pdf-coluna" id="pdf-lei">
          <h1 className="titulo-h1">📂 Lei Federal</h1>
          <p className="subtitulo-p">Lei de Incentivo ao Esporte - Governo Federal</p>
          <ul className="pdf-lista">
            {pdfsLei.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.arquivo} target="_blank" rel="noopener noreferrer">
                  {pdf.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PrestacaoDeContas;
