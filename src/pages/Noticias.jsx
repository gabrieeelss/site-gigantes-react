import React, { useEffect, useState } from "react";
import './Noticias.css';

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

  useEffect(() => {
    fetch("/json/noticias.json")
      .then((response) => response.json())
      .then((dados) => {
        // Ordenar pela data (mais recente primeiro)
        const ordenadas = dados.sort((a, b) => {
          const dataA = converterDataBRparaISO(a.data);
          const dataB = converterDataBRparaISO(b.data);
          return dataB - dataA;
        });
        setNoticias(ordenadas);
      })
      .catch((error) => console.error("Erro ao carregar notícias:", error));
  }, []);

  function converterDataBRparaISO(dataBR) {
    const [dia, mes, ano] = dataBR.split("/");
    return new Date(`${ano}-${mes}-${dia}`);
  }

  function abrirModal(noticia) {
    setNoticiaSelecionada(noticia);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setNoticiaSelecionada(null);
  }

  return (
    <section className="noticias">
      <div className="container-noticias">
        <div className="noticias-header">
          <img src="/img/jornal.png" className="noticias-img" alt="Jornal" />
          <h1 className="titulo-h1">Notícias</h1>
        </div>

        <div id="noticias-lista" className="noticias-grid">
          {noticias.map((noticia, index) => (
            <div
              key={index}
              className="card-noticias"
              onClick={() => abrirModal(noticia)}
            >
              <img src={noticia.imagem} alt={noticia.titulo} />
              <h3>{noticia.titulo}</h3>
            </div>
          ))}
        </div>
      </div>

      {modalAberto && noticiaSelecionada && (
        <div id="modal-noticia" className="modal-noticias" onClick={fecharModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="fechar" onClick={fecharModal}>
              &times;
            </span>
            <h1 className="modal-titulo">{noticiaSelecionada.titulo}</h1>
            <img
              id="modal-img"
              src={noticiaSelecionada.imagem}
              alt={noticiaSelecionada.titulo}
            />
            <div id="modal-descricao">{noticiaSelecionada.conteudo}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Noticias;