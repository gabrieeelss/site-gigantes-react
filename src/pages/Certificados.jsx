import { useState, useEffect } from "react";

function Certificados() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const certificados = [
      { nome: "Certificado 18-18a (em renovação)", arquivo: "18-18a Certidão de Registro Cadastral.pdf" },
      { nome: "CND Municipal", arquivo: "Certidão de Regularidade de Débito de Qualquer Origem CND Municipal - AECS.pdf" },
      { nome: "CND Federal (Receita/PGFN)", arquivo: "Certidão de Regularidade de Débitos Relativos a Créditos Tributários Federais - AECS.pdf" },
      { nome: "CNDT - Certidão Trabalhista", arquivo: "Certidão de Regularidade de Débitos Trabalhistas - CNDT - AECS.pdf" },
      { nome: "CRF - FGTS", arquivo: "Certidão de Regularidade junto ao Fundo de Garantia por Tempo de Serviço - CRF - AECS.pdf" },
      { nome: "CDA - Dívida Ativa Estadual", arquivo: "CERTIDAO DEBITOS DIVIDA ATIVA ECRD - AECS (1).pdf" },
      { nome: "Comprovante CNPJ", arquivo: "Comprovante de Inscrição no Cadastro Nacional de Pessoa Jurídica - AECS.pdf" },
      { nome: "Consulta Apenados TCE-SP", arquivo: "Consulta à relação de apenados do Tribunal de Contas do Estado de São Paulo - AECS.pdf" },
      { nome: "CEIS - Empresas Inidôneas", arquivo: "Consulta de empresas inidôneas e suspensas - CEIS - AECS.pdf" },
      { nome: "Sanções por Fornecedor", arquivo: "Consulta de sanções por fornecedor  - AECS.pdf" },
      { nome: "CRC - Municipal", arquivo: "CRC Municipal.pdf" },
    ];

    setPdfs(certificados);
  }, []);

  return (
    <section className="pdf-section">
      <div className="pdf-coluna pdf-coluna-certificados">
        <div className="titulo-header">
          <img src="./img/certificado.png" className="titulo-img" alt="Certificados" />
          <h1 className="titulo-header-h1">CERTIFICADOS</h1>
        </div>
        <ul id="lista-pdfs" className="pdf-lista">
          {pdfs.map((pdf, index) => (
            <li key={index}>
              <a
                href={`/arquivos/certificados/${pdf.arquivo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pdf.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificados;
